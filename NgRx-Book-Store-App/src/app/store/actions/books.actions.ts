import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book.model";

export const getBooks = createAction(
    '[App Component] Request the books'
  );
  
  export const retrievedBooks = createAction(
    '[Book Service API Call] Get Books Successfully',
    props<{ books: Book[] }>()
  );
  
  