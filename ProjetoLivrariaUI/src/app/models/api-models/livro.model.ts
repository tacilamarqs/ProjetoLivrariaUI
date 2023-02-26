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
  valor: number,
  autorNome: string | null,
  autorId?: string | null,
}
