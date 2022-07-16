import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromBooks from '../reducers/books.reducer'

export const selectBooksState =
  createFeatureSelector<fromBooks.BookState>('books');

export const SelectAllBooks = createSelector(
    selectBooksState,
   fromBooks.selectAll
);