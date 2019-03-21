import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  @Input() books: Book[];
  @Output('pick') pickEvent: EventEmitter<number> = new EventEmitter<number>();

  activeBook: number;

  constructor() { }

  ngOnInit() {
  }

  pickItem(index: number) {
    this.activeBook = index;
    this.pickEvent.emit(index);
  }

}
