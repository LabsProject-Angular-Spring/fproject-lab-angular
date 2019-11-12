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
  public form: DynamicFormGroup<Login>;

  constructor(private fb: DynamicFormBuilder,
    private login: LoginService,
    private router: Router) { }

  ngOnInit() {
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
              console.log(data)
            });
            await this.router.navigate(['/lista-peticiones']);
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
