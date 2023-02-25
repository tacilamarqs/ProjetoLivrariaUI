import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { ViewLivroComponent } from './pages/view-livro/view-livro.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ApagarComponent } from './pages/apagar/apagar.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path : "**", redirectTo: "LivrosComponent", pathMatch: "full" },
  { path: "livro", component: LivrosComponent},
  { path: "livro/:id", component: ViewLivroComponent},
  { path: "criar", component: CadastroComponent},
  { path: "livro/:id", component: ApagarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
