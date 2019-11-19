import { SportDetailsComponent } from './components/sport-details/sport-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportListComponent } from './components/sport-list/sport-list.component';

const routes: Routes = [
  {
    path: '', component: SportListComponent, children: [
      { path: 'sport-detail/:id', component: SportDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }

