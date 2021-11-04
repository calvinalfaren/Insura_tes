import { AppGuard } from './app.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate: [AppGuard]
  },

  { path: 'landing', loadChildren: 'app/pages/landing/landing.module#LandingModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  // useHash: true
});
