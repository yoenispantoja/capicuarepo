import { MaterialModule } from '@capicuarepo/material';
import { UserService } from './../../services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserRoutingModule } from './user.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
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
