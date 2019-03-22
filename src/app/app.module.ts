import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BooksComponent } from './shared/components/books/books.component';
import { BooksListComponent } from './shared/components/books/books-list/books-list.component';
import { BookDetailsComponent } from './shared/components/books/book-details/book-details.component';

// Directives
import { ActiveDirective } from './shared/directives/active.directive';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BooksShopPageComponent } from './pages/books-shop-page/books-shop-page.component';
import { BooksAdminPageComponent } from './pages/books-admin-page/books-admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { APP_ROUTES } from './app.routing';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    BooksListComponent,
    BookDetailsComponent,
    BooksComponent,
    HeaderComponent,
    FooterComponent,

    // Pages
    HomePageComponent,
    BooksShopPageComponent,
    BooksAdminPageComponent,
    ContactPageComponent,

    // Directives
    ActiveDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
