import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroceryTabPage } from './grocery-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GroceryTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceryTabPageRoutingModule {}
