import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteMoviesService {
  private favoriteMovies: any[] = [];

  constructor() {
    let savedMovies = localStorage.getItem('favoriteMovies');
    if (savedMovies) {
      this.favoriteMovies = JSON.parse(savedMovies);
    }
  }

  addFavoriteMovie(movie: any, description: string) {
    console.log(movie);
    let newMovie = {
      Poster: movie.Poster,
      Title: movie.Title,
      Type: movie.Type,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Description: description,
    };
    console.log('added movie', newMovie);
    this.favoriteMovies.push(newMovie);
    localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

  getFavoriteMovies() {
    console.log('favorited movies : ', this.favoriteMovies);
    return this.favoriteMovies;
  }

  deleteFavoriteMovie(movie: any) {
    let index = this.favoriteMovies.findIndex(
      (favoriteMovie) => favoriteMovie.title === movie.title
    );
    if (index !== -1) {
      this.favoriteMovies.splice(index, 1);
      localStorage.setItem(
        'favoriteMovies',
        JSON.stringify(this.favoriteMovies)
      );
    }
  }
}
