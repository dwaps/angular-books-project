import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BookService {

  public books: Book[] = [
    new Book(1, 'Il était une fois', 3.87, 16),
    new Book(2, 'Raconte-moi', 53, 10),
    new Book(3, 'Biographie étrange', 28, 6),
  ];

  constructor() { }
}
