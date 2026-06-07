import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  imports: [CurrencyPipe],
  templateUrl: './total.html',
  styles: ``,
})
export class TotalComponent {

  @Input() total!: number;

}
