import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book.model";
import * as BookActions from "../actions/book.action";

export interface BookState extends EntityState<Book> {}


export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({selectId: (book) => book.id});

export const initialState: BookState = adapter.getInitialState();


export const bookReducer = createReducer(
  initialState,
  on(BookActions.retrievedBooks, (state, {books}) => {
    return adapter.addMany(books, state)
  })
);

export const {selectAll} = adapter.getSelectors();