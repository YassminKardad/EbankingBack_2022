import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8185/api/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

 

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(baseUrl+"/clients");
  }
  get(id: any): Observable<Client> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl+"/addClient", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl+"/update_client/"}${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByFirstname(firstname: any): Observable<Client[]> {
    return this.http.get<Client[]>(`${baseUrl+"/clients/{firstname}"}?firstname=${firstname}`);
  }
}
