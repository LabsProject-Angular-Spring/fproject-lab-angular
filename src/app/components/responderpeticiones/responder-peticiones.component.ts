import { Component, OnInit } from '@angular/core';
import { ListauxService } from '../../services/listaux.service'
@Component({
  selector: 'app-responder-peticiones',
  templateUrl: './responder-peticiones.component.html',
  styleUrls: ['./responder-peticiones.component.scss']
})
export class ResponderPeticionesComponent implements OnInit {
  Peticiones;
  constructor(private serivceList: ListauxService) { }

  ngOnInit() {
    this.serivceList.list().subscribe(data => {
      this.Peticiones = data;
    });
  }

}
