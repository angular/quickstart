/**
 * Created by kyle on 2/14/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// promise
import 'rxjs/add/operator/toPromise';

// properties
import { Properties } from '../../../properties'

//import types
import { ChampionGroup} from '../../../types/champion/champion.group'
import {Champion} from "../../../types/champion/champion";

@Injectable()
export class ChampionService{
  private championsUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion';

  constructor(private http: Http, private properties: Properties){}

  getAllChampions(): Promise<ChampionGroup>{
  return this.http.get(this.championsUrl + "?champData=tags&api_key=" + this.properties.getAPIKey())
    .toPromise().then(response => {
      console.log("Getting All Champions:")
      console.log(response.json().data);
      return response.json().data as ChampionGroup;
    })
    .catch(this.handleError);
}

  getChampion(champion: Champion): Promise<Champion> {
  return this.http.get(this.championsUrl + "/" + champion.id + "?champData=all&api_key=" + this.properties.getAPIKey())
    .toPromise().then(response => {
      console.log("Retrieved Champion Data: ");
      console.log(response.json());
      return response.json() as Champion;
    })
    .catch(this.handleError);
}

  // error handler
  handleError(error: any): Promise<any> {
    console.log('An error occurred');
    return Promise.reject(error.message || error);
  }

}

