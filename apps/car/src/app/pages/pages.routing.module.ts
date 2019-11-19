import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: PagesComponent, pathMatch: 'prefix',
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'photo', loadChildren: () => import('./photo/photo.module').then(m => m.PhotoModule) },
      { path: 'sport', loadChildren: () => import('./sport/sport.module').then(m => m.SportModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }


