import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(Login: Login) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    console.log(JSON.parse(JSON.stringify(Login)))
    return this.http.post('http://localhost:10030/labrequest/login',
     JSON.parse(JSON.stringify(Login)), {  headers: headers});
  }
}
