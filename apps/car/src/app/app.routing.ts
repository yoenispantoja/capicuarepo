import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './shared/not-page-found/not-page-found.component';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: NotPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




