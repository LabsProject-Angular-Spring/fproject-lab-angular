import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Soli} from '../../models/soli';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import {SolicitarService} from '../../services/solicitar.service'
import 'rxjs/add/operator/toPromise';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solisala',
  templateUrl: './solisala.component.html',
  styleUrls: ['./solisala.component.scss']
})
export class SolisalaComponent implements OnInit {
  public form: DynamicFormGroup<Soli>;
  buildings;
  teachers;
  faculties; 
  data;
  constructor(private fb: DynamicFormBuilder, private solicitarService: SolicitarService) { }

  async ngOnInit() {

    this.form = this.fb.group(Soli, {
      date: '', datetime: '', name: '', labid: '', 
      asign: '', teacherid: '', iduser: parseInt(await localStorage.getItem("logged")), facultyid: '', 
      students: '', cantmachines: '', cantconsume: '',
      observation: '', usemachines: false,
      useconsume: false, guide: false, status: 0 
    });

    this.solicitarService.listBuilding().subscribe(res => {
      this.buildings = res;
    })

    this.solicitarService.listTeachers().subscribe(res => {
      this.teachers = res;
    })
    
    this.solicitarService.listFaculties().subscribe(res => {
      this.faculties = res;
    })
  }

  async send(){
    
    await this.solicitarService.register(this.form.object).subscribe(data => {
      this.data = data;
      Swal.fire({
        title: 'Cargando...',
        html: data,
        timer: 2200,
        onBeforeOpen: async () => {
        }
      });
    }
    )

  }


}
