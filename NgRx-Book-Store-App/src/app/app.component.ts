import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from './services/book-service';
import * as BookActions from '../app/store/actions/book.action'
import { SelectAllBooks } from './store/selectors/book.selector';
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
