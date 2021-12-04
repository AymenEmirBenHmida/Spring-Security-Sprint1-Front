import { Injectable } from '@angular/core';
import { Author } from '../model/author.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authors : Author[];
  apiURL: string = 'http://localhost:8060/produits/api/author';
  constructor(private http : HttpClient) {
  }
  listeAuthor(): Observable<Author[]>{
  return this.http.get<Author[]>(this.apiURL);
  }
   listeAuthors():Author[]{
     return this.authors;
   }
   ajouterAuthor( prod: Author):Observable<Author>{
    return this.http.post<Author>(this.apiURL, prod, httpOptions);
    }
    supprimerAuthor(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterAuthor(id: number): Observable<Author> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Author>(url);
        }
      
        updateAuthor(prod :Author) : Observable<Author>
{
return this.http.put<Author>(this.apiURL, prod, httpOptions);
}
}
