import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/api-models/livro.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  private baseApiUrl = 'https://localhost:7175';

  constructor(private httpClient: HttpClient) { }

  getLivro(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.baseApiUrl + '/Livro');
  }
}
