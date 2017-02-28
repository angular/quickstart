import {Component, OnInit} from "@angular/core";
import {ItemService} from "../modules/item-services/services/item.service";
import {ItemGroup} from "../types/item/item.group";
import {Item} from "../types/item/item";
/**
 * Created by kyle on 2/18/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'items-section',
  templateUrl:'./items-section.component.html',
  styleUrls: ['items-section.component.css']
})
export class ItemsSectionComponent implements OnInit{
  items: ItemGroup;
  selectedItem: Item;

  constructor(private itemService: ItemService){}

  getAllItems(): void{
    this.itemService.getAllItems()
      .then(items => {
        this.items = items;
      });
  }

  selectItem(item: Item): void{
    this.itemService.getItem(item)
      .then(item => {
        console.log("Item Data: ");
        console.log(item);
        this.selectedItem = item;
      });
  }

  ngOnInit(): void{
    this.getAllItems();
  }
}
