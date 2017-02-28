/**Created by kyle on 2/20/2017.*/
import {Stat} from "./stat";
import {Gold} from "./gold";
import {Image} from "./image";
export class Item{
  id: number;
  name: string;
  description: string;
  plaintext: string;
  tags: string[];
  depth: number;
  stats: Stat;
  into: string[];
  from: string[];
  gold: Gold;
  image: Image;
}
