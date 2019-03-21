import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: any[] = [
    {
      id: 1,
      title: 'Il était une fois',
      price: 3.87,
      copies: 16,
      selected: true,
      available: true
    },
    {
      id: 2,
      title: 'Raconte-moi',
      price: 53,
      copies: 0,
      selected: false,
      available: false
    },
    {
      id: 3,
      title: 'Biographie étrange',
      price: 28,
      copies: 6,
      selected: false,
      available: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
