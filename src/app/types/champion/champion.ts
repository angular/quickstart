/**
 * Created by kyle on 2/14/2017.
 */
import { Spell } from './spell'
import {Skin} from "./skin";
import {Stat} from "./stat";
import {Info} from "./info";

export class Champion{
  id: number;
  key: string;
  title: string;
  name: string;
  lore: string;
  tags: string[];
  enemytips: string[];
  allytips: string[];
  info: Info[];
  spells: Spell[];
  skins: Skin[];
  stats: Stat;
}
