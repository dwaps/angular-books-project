import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// Models
import { Book } from 'src/app/shared/models/book';

// Services
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  book: Book;
  subscription: Subscription;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.subscription = this.bookService.book.subscribe((book: Book) => {
      this.book = book;
    })
  }

  public addIntoCart(): void {
    console.log('adding to shopping cart...');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
