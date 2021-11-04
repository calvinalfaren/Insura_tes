import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
      path: 'home',
      loadChildren: 'app/pages/home/home.module#HomeModule',
      data: {
          breadcrumb: 'Home',
      }
  },
  {
      path: 'profile',
      loadChildren: 'app/pages/profile/profile.module#ProfileModule',
      data: {
          breadcrumb: 'Profile',
      }
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
