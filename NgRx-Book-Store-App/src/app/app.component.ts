import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './services/book-service';
import * as BookActions from './store/actions/books.actions'
import { SelectAllBooks } from './store/selectors/books.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.store.pipe(select(SelectAllBooks));
  constructor(private booksService: GoogleBooksService, private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(BookActions.getBooks());
  }
}
