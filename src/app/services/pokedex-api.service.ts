import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexApiService {
  private apiUrl = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokedex(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokedex')
  }

  getLink(link: string): Observable<any> {
    return this.http.get<any>(link)
  }
}
