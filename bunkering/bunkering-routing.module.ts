import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BunkeringComponent } from './views/bunkering.component';

const routes: Routes = [
	{
    path: '',
    children: [
      { path: 'login', component: BunkeringComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const ArrayOfComponents = [BunkeringComponent]