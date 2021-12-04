import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

import { ActivatedRoute,Router } from '@angular/router';
import { Book } from '../model/book.model';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {
  currentBook = new Book();
  authors : Author[];
  constructor(private bookService : BookService, private router:Router,private autherrService : AuthorService ,private activatedRoute: ActivatedRoute ) {
    this.authors = autherrService.listeAuthors();
   }

  ngOnInit() {
    this.bookService.consulterProdui(this.activatedRoute.snapshot.params.id).
     subscribe( prod =>{ this.currentBook = prod; } ) ;
     this.autherrService.listeAuthor().subscribe(prods => {
      console.log(prods);
      this.authors = prods;
      });
    }
    updateProduit() {
      this.bookService.updateProduit(this.currentBook).subscribe(prod => {
      this.router.navigate(['books']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}
