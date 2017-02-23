/**
 * Created by simonletort on 2/22/17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 11, name: 'Monica' },
      { id: 12, name: 'Paloma' },
      { id: 13, name: 'Camilo' },
      { id: 14, name: 'Bill' },
      { id: 15, name: 'Nury' },
      { id: 16, name: 'Ciro' },
      { id: 17, name: 'Simon' },
      { id: 18, name: 'Papik' },
      { id: 19, name: 'Mamig' },
      { id: 20, name: 'Faztr' }
    ];
    return {heroes};
  }
}
