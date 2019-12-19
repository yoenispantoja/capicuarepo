import { Page404Component } from './page404/page404.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        data: { pageTitle: 'Dashboard' },
        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
      },
      {
        path: 'sports',
        data: { pageTitle: 'Sports list' },
        loadChildren: () => import(`./sport/sport.module`).then(m => m.SportModule)
      },
      {
        path: 'users',
        data: { pageTitle: 'Users list' },
        loadChildren: () => import(`./user/user.module`).then(m => m.UserModule)
      },
      {
        path: 'photos',
        data: { pageTitle: 'Photos list' },
        loadChildren: () => import(`./photo/photo.module`).then(m => m.PhotoModule)
      },

      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      { path: '**', component: Page404Component }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }


