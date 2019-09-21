import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'car', loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'photo', loadChildren: () => import('./modules/photo/photo.module').then(m => m.PhotoModule) },
  { path: '', redirectTo: '/car', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
