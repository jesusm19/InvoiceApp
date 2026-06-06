import { Component, Input } from '@angular/core';
import { Item } from '../../models/item-model';
import { RowItemComponent } from "../row-item/row-item";

@Component({
  selector: 'app-list-items',
  imports: [RowItemComponent],
  templateUrl: './list-items.html',
  styles: ``,
})
export class ListItemsComponent {

  @Input({required: true}) items!: Item[];

}
