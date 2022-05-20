import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';

const API_URL = 'http://localhost:8080/in/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Pet[]> {
      return this.http.get<Pet[]> (API_URL + 'pets');
  }

  get(name: any): Observable<Pet> {
    return this.http.get('${API_URL}pet/${name}')
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + 'pet', data);
  }

  updateOwner(data: any): Observable<any> {
    return this.http.put(API_URL + 'owner', data);
  }

  updatePet(id: any, data: any): Observable<any> {
    return this.http.put('${API_URL}pet/${id}', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${API_URL}pet/${id}');
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL + 'pet');
  }


}
