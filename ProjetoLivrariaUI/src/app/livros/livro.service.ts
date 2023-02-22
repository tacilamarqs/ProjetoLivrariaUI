import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/api-models/livro.model';
import { updateLivroRequest } from '../models/api-models/updatelivrorequest.model'

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

    const updateLivroRequest: updateLivroRequest = {
      titulo: livroRequest.titulo,
      subtitulo: livroRequest.subtitulo,
      resumo: livroRequest.resumo,
      numeroDePaginas: livroRequest.numeroDePaginas,
      dataDePublicacao: livroRequest.dataDePublicacao,
      edicao: livroRequest.edicao,
      colecao: livroRequest.colecao,
      urlFotoCapa: livroRequest.urlFotoCapa,
      valor: livroRequest.valor,
      generoId: livroRequest.genero.generoId,
      nomeGenero: livroRequest.genero.nomeGenero,
      descricao: livroRequest.genero.descricao,
      autorId: livroRequest.autor.autorId,
      autorNome: livroRequest.autor.autorNome,
      editoraId: livroRequest.editora.editoraId,
      editoraNome: livroRequest.editora.editoraNome,
    }

    return this.httpClient.put<Livro>(this.baseApiUrl + '/Livro/' + livroId, updateLivroRequest);

  }
}
