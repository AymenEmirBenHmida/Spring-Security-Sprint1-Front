import { Author } from '../model/author.model';


export class Book {
    idBook : number;
    nomBook : string;
    prixBook : number;
    datePublication : Date ;
    descriptionBook: string ;
    author :Author;
    }