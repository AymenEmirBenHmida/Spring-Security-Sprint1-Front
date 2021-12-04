import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorsComponent } from './authors/authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddBookComponent,
    UpdateProduitComponent,
    AuthorsComponent,
    AddAuthorComponent,
    UpdateAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
