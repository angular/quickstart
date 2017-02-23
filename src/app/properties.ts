
import {Injectable} from "@angular/core";

@Injectable()
export class Properties {
  apiKey = 'RGAPI-92E49C03-4CA0-4923-8DEB-7011FA9D8E6A';

  constructor(){}

  getAPIKey(): string{
    return this.apiKey;
  }

}
