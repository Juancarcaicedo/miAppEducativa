import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http'; // importamos el modulo http para hacer peticiones

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule // lo importamos 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
