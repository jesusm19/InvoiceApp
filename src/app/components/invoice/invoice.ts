import { Component, OnInit, Pipe } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice-model';
import { InvoiceViewComponent } from "../invoice-view/invoice-view";
import { ClientViewComponent } from "../client-view/client-view";
import { CompanyViewComponent } from "../company-view/company-view";
import { ListItemsComponent } from "../list-items/list-items";

@Component({
  selector: 'app-invoice',
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, ListItemsComponent],
  templateUrl: './invoice.html',
  styleUrl: './invoice.css',
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.invoiceService.getInvoice();
  }

}