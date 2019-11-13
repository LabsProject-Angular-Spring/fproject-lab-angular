import { Component, Input, OnInit } from '@angular/core';
import { ListauxService } from '../../services/listaux.service'
@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.scss']
})
export class ListaPeticionesComponent implements OnInit {
  type: string;
  Peticiones;
  constructor(private service: ListauxService) { 
    this.type = "student";  
  }

  ngOnInit() {
    this.service.listUser(localStorage.getItem("logged")).subscribe(data => {
      this.Peticiones = data;
    })
  }

}
