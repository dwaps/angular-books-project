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

  constructor() { }

  ngOnInit() {
    console.log(this.books);
  }

  pickItem(index: number) {
    this.pickEvent.emit(index);
  }

}
