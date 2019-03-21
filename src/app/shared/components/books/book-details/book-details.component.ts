import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: any = {
    id: 1,
    title: 'Il était une fois',
    price: 3.87,
    copies: 16,
    selected: true,
    available: true
  };

  constructor() { }

  ngOnInit() {
  }

}
