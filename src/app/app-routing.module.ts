import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateProduitComponent } from 'src/app/update-produit/update-produit.component';

import { AuthorsComponent } from './authors/authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';

const routes: Routes = [
  {path: "books", component : BooksComponent},
  {path: "add-book", component : AddBookComponent},
  {path:"", redirectTo:"books", pathMatch: "full"},
  {path:"updateProduit/:id", component: UpdateProduitComponent},
  {path: "authors", component : AuthorsComponent},
  {path: "add-author", component : AddAuthorComponent},
  {path:"updateAuthor/:id", component: UpdateAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
