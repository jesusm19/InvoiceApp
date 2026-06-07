import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item-model';
import { RowItemComponent } from "../row-item/row-item";
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-list-items',
  imports: [RowItemComponent],
  templateUrl: './list-items.html',
  styles: ``,
})
export class ListItemsComponent {

  @Input({required: true}) items!: Item[];
  @Output() removeItemEmitter: EventEmitter<number> = new EventEmitter<number>();

  removeItemById(id: number): void {
    this.removeItemEmitter.emit(id);
  }

}
