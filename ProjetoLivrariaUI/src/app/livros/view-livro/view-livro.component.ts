import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-view-livro',
  templateUrl: './view-livro.component.html',
  styleUrls: ['./view-livro.component.css']
})
export class ViewLivroComponent implements OnInit {

  livroId: string | null | undefined;

  constructor(private readonly livroService: LivroService,
    private  readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params)  => {
        this.livroId = params.get('id');

        if(this.livroId) {
          this.livroService.getLivro(this.livroId)
          .subscribe(
            (successResponse) => {
              console.log(successResponse);
            }
          );
        }
      }
    );
  }
}
