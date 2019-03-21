import { Component, OnInit, Input } from '@angular/core';

import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input('book') book: Book;

  constructor() { }

  ngOnInit() {
  }

}
