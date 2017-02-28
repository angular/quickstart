/**
 * Created by kyle on 2/23/2017.
 */
import {ChampionService} from "../app/modules/champion-services/services/champion.service";
import {TestBed, async, inject} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {Properties} from "../app/properties";

describe('champion-service test', ()=>{

  let keys: string[];

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers:[ChampionService, Properties]
    });
  });

  it('should give me back an object array',
    async(inject([ChampionService], (service: ChampionService)=> {
      // expect(service.getAllChampions()).toBeTruthy();
      // expect(service.getAllChampions()).toContain(ChampionGroup);
      service.getAllChampions().then(response =>{
        expect(response).toBeTruthy();
        keys = Object.keys(response);
        expect(keys.length).toBeCloseTo(134);
        expect(keys).toContain('Sona');
      });
    }))
  );
});
