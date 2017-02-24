/**
 * Created by kyle on 2/24/2017.
 */
import {Injectable} from "@angular/core";
import {ChampionService} from "../../app/modules/champion-services/services/champion.service";

@Injectable()
export class ChampionDependentService{
  constructor(private championService: ChampionService){}

}
