import { Route } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { BooksShopPageComponent } from './pages/books-shop-page/books-shop-page.component';
import { BooksAdminPageComponent } from './pages/books-admin-page/books-admin-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const APP_ROUTES: Route[] = [
  { path: '', component: HomePageComponent },
  { path: 'books', component: BooksShopPageComponent },
  { path: 'admin/books', component: BooksAdminPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];