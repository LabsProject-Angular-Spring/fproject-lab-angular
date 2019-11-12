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
import { ListaPeticionesComponent } from './components/listapeticiones/lista-peticiones.component';
import { ResponderPeticionesComponent } from './components/responderpeticiones/responder-peticiones.component';
import { ListaComponent } from './components/lista/lista-peticiones.component';
import { AuthGuard } from "./guards/auth-guard.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ResponderPeticionesComponent,
    SolisalaComponent,
    ListaPeticionesComponent,
    ListaComponent
  ],
  exports: [ResponderPeticionesComponent, ListaPeticionesComponent, ListaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [DynamicFormBuilder, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
