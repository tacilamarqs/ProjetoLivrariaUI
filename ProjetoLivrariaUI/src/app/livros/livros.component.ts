import { Component, OnInit } from '@angular/core';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
      //buscar livros
      this.livroService.getLivro()
      .subscribe(
        (sucessResponse) => {
          console.log(sucessResponse[0].titulo);
          console.log(sucessResponse[0].subtitulo);
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
  }
}
