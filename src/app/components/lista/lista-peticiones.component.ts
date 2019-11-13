import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() type: string;
  @Input() Peticiones: [];
  constructor() {

   }

  ngOnInit() {
  }

  accept(id) {

  }

}
