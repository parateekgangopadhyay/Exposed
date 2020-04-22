import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalTabPage } from './hospital-tab.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalTabPageRoutingModule {}
