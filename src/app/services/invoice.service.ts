import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice-model';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;
  
  constructor() {}

  getInvoice(): Invoice {
    return { ...this.invoice, total: this.getTotalAmount() };
  }

  getTotalAmount(): number {
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  removeItemById(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    return { ...this.invoice, total: this.getTotalAmount() };
  }

  addItem(item: Item): Invoice {
    this.invoice.items.push(item);
    return { ...this.invoice, total: this.getTotalAmount() };
  }

}
