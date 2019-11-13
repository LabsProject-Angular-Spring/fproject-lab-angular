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
    return this.http.get("http://localhost:10030/labrequest/building", { headers: headers }) // pETICIÓN GET
  }

  listTeachers = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10030/labrequest/teacher", { headers: headers }) // pETICIÓN GET

  }
  listFaculties = () => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json'); // Hacemos saber que es jSON
    return this.http.get("http://localhost:10030/labrequest/faculty", { headers: headers }) // pETICIÓN GET

  }

}
