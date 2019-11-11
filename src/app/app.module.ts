import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SolisalaComponent } from './components/solisala/solisala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilder } from 'ngx-dynamic-form-builder';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ListaPeticionesComponent } from './components/lista-peticiones/lista-peticiones.component';
import { ResponderPeticionesComponent } from './components/responder-peticiones/responder-peticiones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResponderPeticionesComponent,
    SolisalaComponent,
    ListaPeticionesComponent,
  ],
  exports:[ResponderPeticionesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [    DynamicFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
