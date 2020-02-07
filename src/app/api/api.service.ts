import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public sendData(): Observable<Object> {

     return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007');
  }
}
