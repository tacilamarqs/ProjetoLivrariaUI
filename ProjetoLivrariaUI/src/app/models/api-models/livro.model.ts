import { Autor } from "./autor.model";
import { Editora } from "./editora.model";
import { Genero } from "./genero.model";

export interface Livro {
  id: string,
  titulo: string,
  subtitulo: string,
  resumo: string,
  numeroDePaginas: number,
  dataDePublicacao: string,
  edicao: number,
  colecao: string,
  urlFotoCapa: string,
  valor: number,
  generoId: string,
  autorId: string,
  editoraId: string,
  autor: Autor,
  editora: Editora,
  genero: Genero,
}
