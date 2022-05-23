import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
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

  get(id: any): Observable<Pet> {
    let queryParams = new HttpParams().append('id', id);
    return this.http.get(API_URL + 'pet/', { params: queryParams} );
  }

  getByName(name: any): Observable<Pet> {
    let queryParams = new HttpParams().append('name', name);
    return this.http.get(API_URL + 'petName/', { params: queryParams} );
  }

  create(data: any): Observable<any> {
    return this.http.post(API_URL + 'pet', data);
  }

  updateOwner(data: any): Observable<any> {
    return this.http.put(API_URL + 'owner', data);
  }

  updatePet(id: any, data: any): Observable<any> {
    let queryParams = new HttpParams().append('id', id);
    return this.http.put(API_URL + 'pet/', data, { params: queryParams} );
  }

  delete(id: any): Observable<any> {
    let queryParams = new HttpParams().append('id', id);
    return this.http.delete(API_URL + 'pet/', { params: queryParams} );
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL + 'pets');
  }


}
