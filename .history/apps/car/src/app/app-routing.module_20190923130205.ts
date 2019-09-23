import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'photo', loadChildren: () => import('./modules/photo/photo.module').then(m => m.PhotoModule) },
  { path: 'sport', loadChildren: () => import('./modules/sport/sport.module').then(m => m.SportModule) },

  { path: '', redirectTo: '/photo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
