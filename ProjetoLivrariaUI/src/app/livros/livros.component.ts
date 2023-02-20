import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Livro } from '../models/ui-models/livro.model';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  livros: Livro[] = [];
  displayedColumns: string[] = ['titulo', 'subtitulo', 'resumo','numeroDePaginas', 'dataDePublicacao','edicao','colecao','valor','autor','editora','genero'];
  dataSource: MatTableDataSource<Livro> = new MatTableDataSource<Livro>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  filterString = '';

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
      //buscar livros
      this.livroService.getLivro()
      .subscribe(
        (sucessResponse) => {
          this.livros = sucessResponse;
          this.dataSource = new MatTableDataSource<Livro>(this.livros);

          if(this.matPaginator) {
            this.dataSource.paginator = this.matPaginator;
          }
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }

  filtrarLivros() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }
}
