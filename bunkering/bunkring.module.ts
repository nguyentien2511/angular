import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule, ArrayOfComponents } from './bunkering-routing.module';

@NgModule({
  declarations: [
    ArrayOfComponents
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class BunkeringModule { }