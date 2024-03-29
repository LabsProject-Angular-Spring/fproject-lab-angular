import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitarService {

  constructor(private http: HttpClient) { }
  listBuilding = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10070/labrequest/building", { headers: headers }) // pETICIÓN GET
  }

  listTeachers = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10070/labrequest/teacher", { headers: headers }) // pETICIÓN GET

  }
  listFaculties = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10070/labrequest/faculty", { headers: headers }) // pETICIÓN GET

  }
  register = (model) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.post("http://localhost:10070/labrequest/add", model, { responseType: 'text' }) // pETICIÓN GET
  }
}
