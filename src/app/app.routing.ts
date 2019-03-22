import { Route } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BooksShopPageComponent } from './pages/books-shop-page/books-shop-page.component';
import { BooksAdminPageComponent } from './pages/books-admin-page/books-admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

// Components
import { BooksListComponent } from './shared/components/books/books-list/books-list.component';
import { BookDetailsComponent } from './shared/components/books/book-details/book-details.component';
import { BookAddComponent } from './shared/components/books/book-add/book-add.component';
import { BookEditComponent } from './shared/components/books/book-edit/book-edit.component';

export const APP_ROUTES: Route[] = [
  { path: 'books', component: BooksShopPageComponent },
  { path: 'admin/books', component: BooksAdminPageComponent,
    children: [
      { path: 'add/:id', component: BookAddComponent },
      { path: 'edit/:id', component: BookEditComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ]
  },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', redirectTo: '' },
];