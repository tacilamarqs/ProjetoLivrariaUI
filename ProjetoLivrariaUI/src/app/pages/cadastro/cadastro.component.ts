import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from 'src/app/livros/livro.service';
import { Editora } from 'src/app/models/ui-models/editora.model';
import { Autor } from 'src/app/models/ui-models/autor.model';
import { Genero } from 'src/app/models/ui-models/genero.model';
import { Livro } from 'src/app/models/ui-models/livro.model';
import { GeneroService } from 'src/app/services/genero.service';
import { AutorService } from 'src/app/services/autor.service';
import { EditoraService } from 'src/app/services/editora.service';

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
    edicao: 0,
    colecao: '',
    urlFotoCapa: '',
    valor: 0,
    autor: {
      autorId: '',
      autorNome: ''
    },
    editora: {
      editoraId: '',
      editoraNome: ''
    },
    genero: {
      generoId: '',
      nomeGenero: '',
      descricao: ''
    },
    generoId: '',
    autorId: '',
    editoraId: ''
  }

  generoLista: Genero[] = [];
  editoraLista: Editora[] = [];
  autorLista: Autor[] = [];
  autorNome: any;
  autor: any;

  constructor(private readonly livroService: LivroService,
    private readonly route: ActivatedRoute,
    private readonly generoService: GeneroService,
    private readonly autorService: AutorService,
    private readonly editoraService: EditoraService,
    private router: Router) { }

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

        this.generoService.getListaGeneros()
          .subscribe(
            (sucessResponse) => {
              this.generoLista = sucessResponse;
            }
          );

          this.autorService.getListaAutores()
          .subscribe(
            (sucessResponse) => {
              this.autorLista = sucessResponse;
            }
          );

          this.editoraService.getListaEditoras()
          .subscribe(
            (sucessResponse) => {
              this.editoraLista = sucessResponse;
            }
          );
      }
    );
  }

  addLivro() {
   this.livroService.addLivro(this.adicionalivro.id, this.adicionalivro)
    .subscribe({
      next: (livro) => {
        this.router.navigate(['livro/:id']);
      }

    });
  }
}
