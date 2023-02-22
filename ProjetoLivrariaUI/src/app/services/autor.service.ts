import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from '../models/api-models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private baseApiUrl = 'https://localhost:7175';

  constructor(private httpClient: HttpClient) { }

  getListaAutores(): Observable<Autor[]> {
    return this.httpClient.get<Autor[]>(this.baseApiUrl + '/Autor');
  }
}
