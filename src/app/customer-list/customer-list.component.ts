import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers: string[] = [];
  formCustomer: FormGroup;

  constructor() {
    this.formCustomer = new FormGroup({
      'name': new FormControl(''),
    })
  }
  
  ngOnInit() {
  }

  processForm() {
    if (!this.formCustomer.value.name || this.formCustomer.value.name.trim().length === 0) return;
    this.customers.push(this.formCustomer.value.name.trim());
    this.formCustomer.reset();
  }

}
