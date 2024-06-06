import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PasswordStrenghDirective } from './directives/password-strengh.directive';


@NgModule({
  declarations: [
    UserComponent,
    PasswordStrenghDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
