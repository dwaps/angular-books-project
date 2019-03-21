import { Component, OnInit, Input } from '@angular/core';

import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input('books') books: Book[];

  constructor() { }

  ngOnInit() {
    console.log(this.books);
  }

}
