import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: SearchBarComponent },
  { path: 'favorites', component: FavoriteMoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieListComponent,
    FavoriteMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
