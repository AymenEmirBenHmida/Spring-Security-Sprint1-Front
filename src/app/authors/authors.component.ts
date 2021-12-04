import { Component, OnInit } from '@angular/core';
import { Author } from '../model/author.model';
import { AuthorService } from '../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors : Author[];

  constructor(private bookService : AuthorService,
    private router:Router) {
    this.authors = bookService.listeAuthors();
   
   }

   ngOnInit(): void {
    this.bookService.listeAuthor().subscribe(prods => {
    console.log(prods);
    this.authors = prods;
    });
    }

    supprimerAuthor(p: Author)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.bookService.supprimerAuthor(p.idAuthor).subscribe(() => {
console.log("author supprimé");
});
this.SuprimerProduitDuTableau(p);
}

SuprimerProduitDuTableau(prod : Author) {
  this.authors.forEach((cur, index) => {
  if(prod.idAuthor=== cur.idAuthor) {
  this.authors.splice(index, 1);
  }
  });
  }

}
