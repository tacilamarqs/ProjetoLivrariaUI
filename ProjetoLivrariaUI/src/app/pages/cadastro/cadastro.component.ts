import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/livros/livro.service';
import { Autor } from 'src/app/models/ui-models/autor.model';
import { Livro } from 'src/app/models/ui-models/livro.model';
import { AutorService } from 'src/app/services/autor.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  livroId: string | null | undefined;

  adicionalivro: Livro = {
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
    valor: 0,
    autorNome: null,
    autorId: null,
  }

  @ViewChild('livroDetalhes') livroDetalhes?: NgForm;

  autorLista: Autor[] = [];

  constructor(private readonly livroService: LivroService,
    private readonly route: ActivatedRoute,
    private readonly autorService: AutorService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)  => {
        this.livroId = params.get('id');

        if(this.livroId) {

          this.livroService.getLivro(this.livroId)
          .subscribe(
            (successResponse) => {
              this.adicionalivro = successResponse;
            }
          );
        }

          this.autorService.getListaAutores()
          .subscribe(
            (sucessResponse) => {
              this.autorLista = sucessResponse;
            }
          );

      }
    );
  }

  addLivro() {

    if(this.livroDetalhes?.form.valid) {
      this.livroService.addLivro(this.adicionalivro)
      .subscribe({
        next: (livro) => {
          console.log(this.adicionalivro)
          this.router.navigateByUrl('');
          this.snackbar.open('O livro foi cadastrado!', undefined, {
          duration:2000
          });
        },
        error: (errorResponse) => {
          console.log(errorResponse)
          console.log('Erro adicionando o livro: ' + this.adicionalivro)
        }
      });
    }
  }

}
