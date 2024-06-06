import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { RegisterTransactionComponent } from './components/register-transaction/register-transaction.component';


@NgModule({
  declarations: [
    TransactionComponent,
    RegisterTransactionComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }
