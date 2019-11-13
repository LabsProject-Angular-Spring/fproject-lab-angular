import { Component, OnInit } from '@angular/core';
import { DynamicFormBuilder, DynamicFormGroup } from 'ngx-dynamic-form-builder';
import { Login } from '../../models/login';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: DynamicFormGroup<Login>; // Form con el modelo login

  constructor(private fb: DynamicFormBuilder,
    private login: LoginService,
    private router: Router) { }

  ngOnInit() { // Al iniciar angular asigmaos el grupo con los valores
    this.form = this.fb.group(Login, { 
      username: '', password: ''
    });
  }
  async onSaveClick() {
    if (this.form.dirty && this.form.valid) {

      Swal.fire({
        title: 'Cargando...',
        html: 'Comprobando credenciales',
        timer: 2200,
        onBeforeOpen: async () => {

          Swal.showLoading();

          try {
            this.login.login(this.form.object).subscribe(data => {
              if(data['id'] == null){
                 Swal.fire({ title: 'Ocurrió un error', html: 'Comprueba tus datos' });
              } else {
                localStorage.setItem("logged", data["userType"].toString())
                if (data["userType"] == 0 || data["userType"] == 1 ){
                  this.router.navigate(['/lista-peticiones']);
                 } else {
                  this.router.navigate(['/responder-peticiones']);
                 }
              }
            });
          } catch (e) {
            console.log(e.message || JSON.stringify(e));
            Swal.hideLoading();
            await Swal.fire({ title: 'Ocurrió un error', html: 'Comprueba tus datos' });
          }
        }
      });

    } else {
      this.form.validateAllFormFields();
    }
  }

}
