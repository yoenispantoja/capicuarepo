import { CustomerEffects } from './pages/customer/store/customer.effects';
import { LoginComponent } from './login/login.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Trabajando con NGSXS
import { NgxsModule } from '@ngxs/store';
import { SportState } from './states/sport-state';


import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './pages/customer/store/customer.reducer';


import {
  NgxSocialButtonModule,
  SocialServiceConfig
} from "ngx-social-button";
import { EffectsModule } from '@ngrx/effects';


// Configs
export function getAuthServiceConfigs() {
  let config = new SocialServiceConfig()
    .addFacebook("Your-Facebook-app-id")
    .addGoogle("774101028178-jujhjb640ln117n4fpttk5bpdth6nn21.apps.googleusercontent.com")
    .addLinkedIn("Your-LinkedIn-Client-Id");
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      //Aquí declaro los stados globales que tendrá mi app
      SportState
    ]),

    StoreModule.forRoot({ customers: CustomerReducer }),
    EffectsModule.forRoot([CustomerEffects]),

    NgxSocialButtonModule,
  ],
  providers: [{
    provide: SocialServiceConfig,
    useFactory: getAuthServiceConfigs
  },],
  bootstrap: [
    AppComponent
  ],


})
export class AppModule {

}
