import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books : Book[];
  apiURL: string = 'http://localhost:8060/produits/api';
  apiURL1: string = 'http://localhost:8060/produits/api/prodscat';
  constructor(private http : HttpClient) {
  }
  listeProduit(): Observable<Book[]>{
  return this.http.get<Book[]>(this.apiURL);
  }
   listeBooks():Book[]{
     return this.books;
   }
   ajouterBook( prod: Book):Observable<Book>{
    return this.http.post<Book>(this.apiURL, prod, httpOptions);
    }
    supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

      consulterProdui(id: number): Observable<Book> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Book>(url);
        }
      
        updateProduit(prod :Book) : Observable<Book>
{
return this.http.put<Book>(this.apiURL, prod, httpOptions);
}
consulterCertainProdui(id: number):Observable<Book[]> {
  const url = `${this.apiURL1}/${id}`;
  return this.http.get<Book[]>(url);
  }


  
  }
