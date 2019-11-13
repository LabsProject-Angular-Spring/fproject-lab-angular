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
  public form: DynamicFormGroup<Soli>;
  constructor(private service: ListauxService) { 
    this.type = "student";  
  }

  async ngOnInit() {
    this.form = this.fb.group(Soli, {
      date: '', datetime: '', name: '', labid: '',
      asign: '', teacherid: '', iduser: parseInt(await localStorage.getItem("logged")), facultyid: '',
      students: '', cantmachines: '', cantconsume: '',
      observation: '', usemachines: false,
      useconsume: false, guide: false, status: 0
    });
    this.service.listUser(await localStorage.getItem("logged")).subscribe(data => {
      this.Peticiones = data;
    })
  }

}
