import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { RegisterTransactionComponent } from './components/register-transaction/register-transaction.component';

const routes: Routes = [
  { path: '', component: TransactionComponent },
  { path: 'register', component: RegisterTransactionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
