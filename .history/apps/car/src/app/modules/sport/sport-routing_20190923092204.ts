import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportListComponent } from './components/sport-list/sport-list.component';


const routes: Routes = [
  {
    path: '', component: sportListComponent, children: [
      { path: 'sport-detail/:id', component: sportDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class sportRoutingModule { }

