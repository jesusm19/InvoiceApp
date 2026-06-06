import { Component, Input } from '@angular/core';
import { Client } from '../../models/client-model';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.html'
})
export class ClientViewComponent {

  @Input({required: true}) client!: Client;
}
