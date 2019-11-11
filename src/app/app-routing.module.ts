import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {SolisalaComponent} from './components/solisala/solisala.component';
import { ListaPeticionesComponent } from './components/lista-peticiones/lista-peticiones.component';
import { ResponderPeticionesComponent } from './Components/responder-peticiones/responder-peticiones.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'solisala', component: SolisalaComponent},
  {path: 'lista-peticiones', component: ListaPeticionesComponent},
  {path: 'Responder-peticiones', component: ResponderPeticionesComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
