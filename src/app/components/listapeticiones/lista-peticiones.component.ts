import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.scss']
})
export class ListaPeticionesComponent implements OnInit {
  type: string;
  Peticiones=[
    {
      Laboratorio: 'Software Libre',
      FechaPedida: '10-08-2019',
      Asignatura: 'Programación 2',
      Docente: 'Pablo Carreño', 
      Facultad: 'Ingeniería',
      Estado: 'Pendiente'
    },
    {
      Laboratorio: 'Hardware y Redes',
      FechaPedida: '12-10-2019',
      Asignatura:  'Redes',
      Docente: 'Juan Velasquez',
      Facultad: 'Ingeniería',
      Estado: 'Aprobado'
    },
    {
      Laboratorio:'Sala Apple',
      FechaPedida:'06-03-2020',
      Asignatura:  'Sistemas operativos',
      Docente: 'Mauricio Alonso',
      Facultad: 'Ingeniería',
      Estado: 'Rechazado'
    },
    {
      Laboratorio: 'Física',
      FechaPedida:'01-11-2019',
      Asignatura:  'Física mecánica',
      Docente: 'Jose Lemus',
      Facultad: 'Ingeniería',
      Estado: 'Pendiente'
    }
  ]
  constructor() { 
    this.type = "student";  
  }

  ngOnInit() {
  }

}
