import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { GroceryTabPageRoutingModule } from './grocery-tab-routing.module';

import { GroceryTabPage } from './grocery-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: GroceryTabPage }]),
    GroceryTabPageRoutingModule
  ],
  declarations: [GroceryTabPage]
})
export class GroceryTabPageModule {}
