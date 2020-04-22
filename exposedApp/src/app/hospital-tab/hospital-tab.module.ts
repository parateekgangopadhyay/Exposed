import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HospitalTabPageRoutingModule } from './hospital-tab-routing.module';

import { HospitalTabPage } from './hospital-tab.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: HospitalTabPage }]),
    HospitalTabPageRoutingModule
  ],
  declarations: [HospitalTabPage]
})
export class HospitalTabPageModule {}
