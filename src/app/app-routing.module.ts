import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';
import {SolisalaComponent} from './components/solisala/solisala.component';
import { ListaPeticionesComponent } from './components/listapeticiones/lista-peticiones.component';
import { ResponderPeticionesComponent } from './components/responderpeticiones/responder-peticiones.component';
import { AuthGuard } from './guards/auth-guard.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'solisala', component: SolisalaComponent, canActivate: [AuthGuard]},
  { path: 'lista-peticiones', component: ListaPeticionesComponent, canActivate: [AuthGuard]},
  { path: 'responder-peticiones', component: ResponderPeticionesComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
