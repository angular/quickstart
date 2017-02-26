/**
 * Created by simonletort on 2/22/17.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let artworks = [
      { id: 11, name: 'Patane' },
      { id: 12, name: 'Touron' },
      { id: 13, name: 'Bosque' },
      { id: 14, name: 'Roldan' },
      { id: 15, name: 'Lanzarini' },
      { id: 16, name: 'xxx' },
      { id: 17, name: 'Simon' },
      { id: 18, name: 'Papik' },
      { id: 19, name: 'Mamig' },
      { id: 20, name: 'Faztr' }
    ];
    return {artworks};
  }
}
