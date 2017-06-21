import {Injectable} from "@angular/core";
import {DatePipe} from "@angular/common";

@Injectable()
export class DateTransformatorService {

  toString(date: Date): String   {
    return new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
  }

}
