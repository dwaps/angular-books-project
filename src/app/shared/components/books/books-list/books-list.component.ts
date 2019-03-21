import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Models
import { Book } from 'src/app/shared/models/book';

// Services
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: Book[];
  activeBook: number;
  subscription: Subscription;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.subscription = this.bookService.books.subscribe((books: Book[]) => {
      this.books = books;
    })
  }

  pickItem(index: number) {
    this.activeBook = index;
    this.bookService.selectBook(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
