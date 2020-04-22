import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'grocery-tab',
    loadChildren: () => import('./grocery-tab/grocery-tab.module').then( m => m.GroceryTabPageModule)
  },
  {
    path: 'hospital-tab',
    loadChildren: () => import('./hospital-tab/hospital-tab.module').then( m => m.HospitalTabPageModule)
  },
  {
    path: 'home-tab',
    loadChildren: () => import('./home-tab/home-tab.module').then( m => m.HomeTabPageModule)
  },
  {
    path: 'profile-tab',
    loadChildren: () => import('./profile-tab/profile-tab.module').then( m => m.ProfileTabPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
