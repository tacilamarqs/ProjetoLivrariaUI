import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path : "**", redirectTo: "LivrosComponent", pathMatch: "full" },
  { path: "livros", component: LivrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
