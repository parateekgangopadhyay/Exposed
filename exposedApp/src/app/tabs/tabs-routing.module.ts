import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-tab/home-tab.module').then(m=>m.HomeTabPageModule)
      },
      {
        path: 'hospital',
        loadChildren: () => import('../hospital-tab/hospital-tab.module').then(m=>m.HospitalTabPageModule)
      },
      {
        path: 'grocery',
        loadChildren: () => import('../grocery-tab/grocery-tab.module').then(m=>m.GroceryTabPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile-tab/profile-tab.module').then(m=>m.ProfileTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
