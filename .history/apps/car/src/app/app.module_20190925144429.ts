import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from '@capicuarepo/toolbar';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

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
    NgReduxModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  //Necesita un constructor para que inicie el estado inicial con los parámetros requeridos
  constructor(ngRedux: NgRedux<IAppState>) {
    //Se le pasa el rootReducer y el estado inicial configurado
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
    console.log('Intial state: ' + INITIAL_STATE);
  }
}
