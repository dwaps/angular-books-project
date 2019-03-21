import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[] = [
    new Book(1, 'Il était une fois', 3.87, 16),
    new Book(2, 'Raconte-moi', 53),
    new Book(3, 'Biographie étrange', 28, 6),
  ];

  constructor() { }

  ngOnInit() {
  }

}
