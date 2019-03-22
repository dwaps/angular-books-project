import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books: BehaviorSubject<Book[]> = new BehaviorSubject([
    new Book(1, 'Il était une fois', 3.87, 16),
    new Book(2, 'Raconte-moi', 53, 10),
    new Book(3, 'Biographie étrange', 28, 6),
  ]);
  public book: BehaviorSubject<Book> = new BehaviorSubject(null);

  constructor() { }

  public selectBook(index: number) {
    this.book.next(this.books.value[index]);
  }
}
