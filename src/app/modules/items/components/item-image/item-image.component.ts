/**
 * Created by kyle on 2/20/2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Image} from "../../../../types/item/image";
@Component({
  moduleId: module.id,
  selector: 'item-image',
  templateUrl: './item-image.component.html'
})
export class ItemImageComponent implements OnInit{
  @Input()
  image: Image;

  imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/item/';

  constructor(){}

  getFullImage(): string{
    return this.imageUrl + this.image.full;
  }

  ngOnInit(){
    this.getFullImage();
  }
}
