import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html'
})
export class AddAuthorComponent implements OnInit {

  newAuthor = new Author();
  
  constructor(private bookService : AuthorService,
    private router:Router) { }
  addAuthor(){
    this.bookService.ajouterAuthor(this.newAuthor).subscribe(prod => {
console.log(prod);
});
this.router.navigate(['authors']).then(() => {
  window.location.reload();
});
}

  ngOnInit(): void {
  }

}
