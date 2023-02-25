import { Autor } from "./autor.model";


export interface Livro {
  id: string,
  titulo: string,
  subtitulo: string,
  resumo: string,
  numeroDePaginas: number,
  dataDePublicacao: string,
  editora: string,
  genero: string,
  edicao: number,
  colecao: string,
  urlFotoCapa: string,
  valor: number,
  autor: Autor,
  autorId: string,
}
