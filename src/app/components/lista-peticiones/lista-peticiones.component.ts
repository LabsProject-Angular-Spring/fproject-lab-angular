import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-peticiones',
  templateUrl: './lista-peticiones.component.html',
  styleUrls: ['./lista-peticiones.component.scss']
})
export class ListaPeticionesComponent implements OnInit {

  Peticiones=[
    {
      Laboratorio: 'Software Libre',
      FechaPedida: '10-08-2019',
      Asignatura: 'Programación 2',
      Docente: 'Pablo Carreño', 
      Facultad: 'Ingeniería'
    },
    {
      Laboratorio: 'Hardware y Redes',
      FechaPedida: '12-10-2019',
      Asignatura:  'Redes',
      Docente: 'Juan Velasquez',
      Facultad: 'Ingeniería'
    },
    {
      Laboratorio:'Sala Apple',
      FechaPedida:'06-03-2020',
      Asignatura:  'Sistemas operativos',
      Docente: 'Mauricio Alonso',
      Facultad: 'Ingeniería'
    },
    {
      Laboratorio: 'Física',
      FechaPedida:'01-11-2019',
      Asignatura:  'Física mecánica',
      Docente: 'Jose Lemus',
      Facultad: 'Ingeniería'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
