import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksEffects } from './store/effects/books.effects';
import { bookReducer } from './store/reducers/books.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ books: bookReducer }),
    EffectsModule.forRoot([BooksEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
