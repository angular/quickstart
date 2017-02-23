/**
 * Created by kyle on 2/16/2017.
 */
import {PipeTransform, Pipe} from "@angular/core";
import {Logger} from "angular2-logger/core";


@Pipe({name: 'values'})
export class ObjectValuesPipe implements PipeTransform {

  constructor(private logger: Logger){}

  transform(value: any, args?: any[]): any[]{
    //debug
    this.logger.debug("Sent object: " + value);

    // create instance vars to store keys and final output
    let keyArr: any[] = Object.keys(value),
      dataArray: any[] = [];

    // loop through the object,
    // pushing values to the return array
    keyArr.forEach((key: any) => {
      dataArray.push(value[key]);
    });

    // return the resulting array
    return dataArray;
  }
}
