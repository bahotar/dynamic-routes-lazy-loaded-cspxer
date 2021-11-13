/* tslint:disable:max-line-length */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';

const routes: Routes = [
  {
    path: '',
    data: { addDynamicChild: true },
    component: GeneralComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GeneralRoutingModule { }
