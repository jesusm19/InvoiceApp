import { Component, Input } from '@angular/core';
import { Item } from '../../models/item-model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'tr[app-row-item]',
  imports: [CurrencyPipe],
  templateUrl: './row-item.html',
  styles: ``,
})
export class RowItemComponent {

  @Input({required: true}) item!: Item;

}
