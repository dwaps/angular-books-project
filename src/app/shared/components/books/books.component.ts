import { Component, OnInit } from '@angular/core';

import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    new Book(1, 'Il était une fois', 3.87, 16),
    new Book(2, 'Raconte-moi', 53),
    new Book(3, 'Biographie étrange', 28, 6),
  ];
  book: Book;

  constructor() { }

  ngOnInit() {
    this.book = this.books[0];
    this.books[2].image = 'http://lorempixel.com/800/800';
  }

  selectBook(index: number) {
    this.book = this.books[index];
  }

}
