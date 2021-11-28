import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html'
})
export class AddBookComponent implements OnInit {

  newBook = new Book();
  authors : Author[];
  
  constructor(private bookService : BookService,
    private autherService : AuthorService,
    private router:Router) {
      this.authors = autherService.listeAuthors();
     }
  addBook(){
    this.bookService.ajouterBook(this.newBook).subscribe(prod => {
console.log(prod);
});
this.router.navigate(['books']).then(() => {
  window.location.reload();
});

}

  ngOnInit(): void {
    this.autherService.listeAuthor().subscribe(prods => {
      console.log(prods);
      this.authors = prods;
      });
  }

}
