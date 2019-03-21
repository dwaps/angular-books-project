import { Component, OnInit } from '@angular/core';

// Models
import { Book } from '../../models/book';

// Services
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  book: Book;

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.books = this.bookService.books;
  }

  selectBook(index: number) {
    this.book = this.books[index];
  }

}
