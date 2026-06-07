import { Client } from "./client-model";
import { Company } from "./company-model";
import { Item } from "./item-model";

export class Invoice {
  id!: number;
  name!: string;
  client!: Client;
  company!: Company;
  items!: Item[];
  total!: number;
}