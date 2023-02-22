import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../models/api-models/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private baseApiUrl = 'https://localhost:7175';

  constructor(private httpClient: HttpClient) { }

  getListaGeneros(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.baseApiUrl + '/Genero');
  }
}
