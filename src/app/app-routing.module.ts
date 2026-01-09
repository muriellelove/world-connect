import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic-layout/basic-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('./countries/list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./countries/detail/detail.module').then(m => m.DetailPageModule)
      },
      {
        path: 'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherPageModule)
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
