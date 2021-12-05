import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

import { ActivatedRoute,Router } from '@angular/router';
import { Author } from '../model/author.model';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html'
})
export class UpdateAuthorComponent implements OnInit {
  currentAuthor = new Author();
  constructor(private authorService : AuthorService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authorService.consulterAuthor(this.activatedRoute.snapshot.params.id).
     subscribe( prod =>{ this.currentAuthor = prod; } ) ;
    }
    updateAuthor() {
      this.authorService.updateAuthor(this.currentAuthor).subscribe(prod => {
      this.router.navigate(['authors']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      }

}
