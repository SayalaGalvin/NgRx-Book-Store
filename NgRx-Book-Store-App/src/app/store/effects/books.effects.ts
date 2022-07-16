import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map } from "rxjs";
import { Book } from "src/app/models/book.model";
import { GoogleBooksService } from "src/app/services/book-service";
import * as BookActions from "../actions/books.actions";

@Injectable()
export class BooksEffects {

    constructor(private actions$: Actions,
        private bookService: GoogleBooksService) {}

    loadBooks$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(BookActions.getBooks),
                concatMap(action =>
                    this.bookService.getBooks()),
                map((books : Book[]) => BookActions.retrievedBooks({books}))

            )
    );

}
