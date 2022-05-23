import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';

const API_URL = 'http://localhost:8080/admin/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllOwners(): Observable<User[]> {
    return this.http.get<User[]> (API_URL + 'owners');
  }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]> (API_URL + 'pets');
  }

  deleteOwner(id: any): Observable<any> {
    let queryParams = new HttpParams().append('id', id);
    return this.http.delete(API_URL + 'owner/', { params: queryParams });
  }

  deletePet(id: any): Observable<any> {
    let queryParams = new HttpParams().append('id', id);
    return this.http.delete(API_URL + 'pet/', { params: queryParams });
  }

}
