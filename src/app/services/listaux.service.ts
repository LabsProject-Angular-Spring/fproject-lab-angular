import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListauxService {

  constructor(private http: HttpClient) { }
  list = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10070/labrequest/list", {headers: headers}) // pETICIÓN GET
  }

  accept = (id, model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); 
    return this.http.put("http://localhost:10070/labrequest/edit/" + id, model, { responseType: 'text'  })
  }

  listUser = (id) => {
    console.log(id)
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10070/labrequest/userlist/" + id, { headers: headers }) // pETICIÓN GET
  }


 }
