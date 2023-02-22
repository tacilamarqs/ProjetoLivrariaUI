import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editora } from '../models/api-models/editora.model';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private baseApiUrl = 'https://localhost:7175';

  constructor(private httpClient: HttpClient) { }

  getListaEditoras(): Observable<Editora[]> {
    return this.httpClient.get<Editora[]>(this.baseApiUrl + '/Editora');
  }
}
