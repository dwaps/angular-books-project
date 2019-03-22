import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-admin-page',
  templateUrl: './books-admin-page.component.html',
  styleUrls: ['./books-admin-page.component.css']
})
export class BooksAdminPageComponent implements OnInit {

  currentRoute: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

}
