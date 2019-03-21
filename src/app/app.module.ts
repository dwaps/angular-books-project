import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BooksComponent } from './shared/components/books/books.component';
import { BooksListComponent } from './shared/components/books/books-list/books-list.component';
import { BookDetailsComponent } from './shared/components/books/book-details/book-details.component';

// Directives
import { ActiveDirective } from './shared/directives/active.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookDetailsComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
