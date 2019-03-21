import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book(1, 'Il était une fois', 3.87, 16);

  constructor() { }

  ngOnInit() {
  }

}
