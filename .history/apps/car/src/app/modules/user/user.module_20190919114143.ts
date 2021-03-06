import { UserService } from './../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user.routing';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModulesModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  providers: [
    UserService
  ],
  entryComponents: [UserDetailsComponent]
})
export class UserModule { }
