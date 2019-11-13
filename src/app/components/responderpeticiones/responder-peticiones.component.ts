import { Component, OnInit } from '@angular/core';
import { ListauxService } from '../../services/listaux.service'
@Component({
  selector: 'app-responder-peticiones',
  templateUrl: './responder-peticiones.component.html',
  styleUrls: ['./responder-peticiones.component.scss']
})
export class ResponderPeticionesComponent implements OnInit {
  Peticiones;
  value;
  constructor(private serivceList: ListauxService) {
    this.value = []
  }

 async ngOnInit() {
    this.serivceList.list().subscribe(data => {
      this.Peticiones = data;

      Object.entries(data).forEach(element => {
        if (element[1].status == 1){
          this.value.push(new Date(element[1].date))
        }
 
      });

    });
   
  }

}
