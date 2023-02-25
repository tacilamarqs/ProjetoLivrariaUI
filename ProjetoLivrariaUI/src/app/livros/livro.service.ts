import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/api-models/livro.model';
import { updateLivroRequest } from '../models/api-models/updatelivrorequest.model'
import { AddLivroRequest } from '../models/api-models/addlivrorequest.model';

@Injectable({
  providedIn: 'root'
})

export class LivroService {

  private baseApiUrl = 'https://localhost:7175';

  constructor(private httpClient: HttpClient) { }

  getTodosLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.baseApiUrl + '/Livro');
  }

  getLivro(livroId: string): Observable<Livro> {
    return this.httpClient.get<Livro>(this.baseApiUrl + '/Livro/' + livroId);
  }

  updateLivro(livroId: string, livroRequest: Livro): Observable<Livro> {
    return this.httpClient.put<Livro>(this.baseApiUrl + '/editar/' + livroId, livroRequest);
  }

  addLivro(livroRequest: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.baseApiUrl + '/criar', livroRequest);
  }

  deletarLivro(livroId: string): Observable<Livro> {
    return this.httpClient.delete<Livro>(this.baseApiUrl + '/deletar/' + livroId);
  }
}
