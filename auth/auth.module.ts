import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule, ArrayOfComponents } from './auth-routing.module';

@NgModule({
  declarations: [
    ArrayOfComponents
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
