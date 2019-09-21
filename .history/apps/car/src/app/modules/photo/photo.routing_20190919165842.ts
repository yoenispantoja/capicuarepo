import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: '', component: PhotoComponent, children: [
      { path: 'Photo-detail/:id', component: PhotoDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }

