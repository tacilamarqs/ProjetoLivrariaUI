import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from 'src/app/models/ui-models/autor.model';
import { Livro } from 'src/app/models/ui-models/livro.model';
import { AutorService } from 'src/app/services/autor.service';
import { LivroService } from '../../livros/livro.service';

@Component({
  selector: 'app-view-livro',
  templateUrl: './view-livro.component.html',
  styleUrls: ['./view-livro.component.css']
})
export class ViewLivroComponent implements OnInit {

  livroId: string | null | undefined;

  livro: Livro = {
    id: '',
    titulo: '',
    subtitulo: '',
    resumo: '',
    numeroDePaginas: 0,
    dataDePublicacao: '',
    editora: '',
    genero: '',
    edicao: 0,
    colecao: '',
    urlFotoCapa: '',
    valor: 0,
    autor: {
      autorId: '',
      autorNome: ''
    },
    autorId: '',
  }


  listaAutor: Autor[] = [];

  @ViewChild('livroForm') livroForm?: NgForm;

  constructor(private readonly livroService: LivroService,
    private readonly route: ActivatedRoute,
    private readonly autorSerice: AutorService,
    private snackbar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)  => {
        this.livroId = params.get('id');

        if(this.livroId) {
          this.livroService.getLivro(this.livroId)
          .subscribe(
            (successResponse) => {
              this.livro = successResponse;
            }
          );

          this.autorSerice.getListaAutores()
          .subscribe (
            (successResponse) => {
              this.listaAutor = successResponse;
            }
          );

        }
      }
    );
  }

  onUpdate(): void {
    this.livroService.updateLivro(this.livro.id, this.livro)
      .subscribe({
        next: (successResponse) => {
          console.log(successResponse)
          this.snackbar.open('O livro foi atualizado!', undefined, {
            duration:2000
          });
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      }
      )
  }

  onDelete(): void {
    this.livroService.deletarLivro(this.livro.id)
      .subscribe({
        next: (successResponse) => {
          console.log(successResponse);
          this.snackbar.open('O livro foi excluído!', undefined, {
            duration:2000
          });

          setTimeout(() => {
            this.router.navigateByUrl('livro');
          }, 2000);
        },
        error: (errorResponse) => {
          console.log(errorResponse);
        }
      });
  }
}


