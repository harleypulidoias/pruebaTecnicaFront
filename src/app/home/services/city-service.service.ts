import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Departament } from '../models/departament';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  constructor(private http: HttpClient) { }

  getDepartament(): Observable<Departament[]>{
    return this.http.get<Departament[]>('https://api-colombia.com/api/v1/Department');
  }


  getCities(idDepartament: number): Observable<City[]>{
    return this.http.get<City[]>(`https://api-colombia.com/api/v1/Department/${idDepartament}/cities`);
  }
}
