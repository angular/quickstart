/**
 * Created by kyle on 2/19/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Properties} from "../../../properties";

// promise
import 'rxjs/add/operator/toPromise';
import {ItemGroup} from "../../../types/item/item.group";
import {Item} from "../../../types/item/item";


@Injectable()
export class ItemService{

  private itemsUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item';

  constructor(private properties: Properties, private http: Http){}

  getAllItems(): Promise<ItemGroup>{
    return this.http.get(this.itemsUrl + "?itemListData=tags&api_key=" + this.properties.getAPIKey())
      .toPromise()
      .then(response => {
        console.log("Retrieved All Items: ")
        console.log(response.json());
        return response.json().data as ItemGroup;
      })
      .catch(this.handleError);
  }

  getItem(item: Item): Promise<Item> {
    return this.http.get(this.itemsUrl + "/" + item.id + "?itemData=all&api_key=" + this.properties.getAPIKey())
      .toPromise()
      .then(response => {
        console.log("Retrieved All Item Data: ");
        console.log(response);
        return response.json();
      })
  }

  // error handler
  handleError(error: any): Promise<any> {
    console.log('An error occurred');
    return Promise.reject(error.message || error);
  }

}
