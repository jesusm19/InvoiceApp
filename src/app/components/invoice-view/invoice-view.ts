import { Component, Input } from '@angular/core';
import { Invoice } from '../../models/invoice-model';

@Component({
  selector: 'app-invoice-view',
  imports: [],
  templateUrl: './invoice-view.html',
})
export class InvoiceViewComponent {

  @Input({required: true}) invoiceId!: number;
  @Input({required: true}) invoiceName!: string;

}
