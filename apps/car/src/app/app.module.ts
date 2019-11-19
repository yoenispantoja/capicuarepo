import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from '@capicuarepo/toolbar';


//Trabajando con NGSXS
import { NgxsModule } from '@ngxs/store';

import { SportState } from './states/sport-state';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarModule,
    NgxsModule.forRoot([
      //Aquí declaro los stados globales que tendrá mi app
      SportState
    ]),
    PagesModule,
    LoginModule

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
