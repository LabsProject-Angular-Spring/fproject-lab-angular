import { Component, Input, OnInit } from '@angular/core';
import { ListauxService } from '../../services/listaux.service'
@Component({
  selector: 'app-lista',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() type: string;
  @Input() Peticiones: [];
  public value: Date[] = [new Date("1/11/2019"), new Date("05/12/2017"), new Date("05/6/2017"), new Date("05/26/2017"), new Date("05/20/2017")]  

  public minDate: Date = new Date("1/01/2019");
  public maxDate: Date = new Date("31/12/2020");

  public multiselect: Boolean = true;

  constructor(private serivceList: ListauxService) {
   }

  ngOnInit() {

  }

  async accept(model, option) {
    model.status = option;
    let date = new Date(model.date);
    let time = new Date(model.datetime);
    model.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay();
    model.datetime = time.getHours() + ":" + time.getMinutes();
    this.serivceList.accept(model.id, model).subscribe(data => {
      console.log(data)
    })
  }

}
