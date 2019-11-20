import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotPageFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }




