import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item-model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  imports: [FormsModule],
  templateUrl: './form-item.html',
  styles: ``,
})
export class FormItemComponent {

  @Output() addItemEmitter = new EventEmitter<Item>();

  private counterId: number = 4;
  public item: any = {
    product: '',
    price: '',
    quantity: ''
  };

  addItem(form: NgForm): void {
    const newItem: Item = {
      id: this.counterId,
      product: this.item.product,
      price: this.item.price,
      quantity: this.item.quantity,
      total(): number {
        return this.price * this.quantity;
      }
    };
    
    this.addItemEmitter.emit(newItem);
    this.counterId++;
    
    this.clearForm(this.item);
    form.reset();
    form.resetForm();

  }
  
  clearForm(item: any): void {
    item.product = '';
    item.price = '';
    item.quantity = '';
  }
}
