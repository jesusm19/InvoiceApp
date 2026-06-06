import { Component, Input } from '@angular/core';
import { Company } from '../../models/company-model';

@Component({
  selector: 'app-company-view',
  imports: [],
  templateUrl: './company-view.html',
  styleUrl: './company-view.css',
})
export class CompanyViewComponent {
  @Input({required: true}) company!: Company;
}
