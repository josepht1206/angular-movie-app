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
    let newMovie = {
      title: movie.Title,
      description: description,
    };
    this.favoriteMovies.push(newMovie);
    localStorage.setItem('favoriteMovies', JSON.stringify(this.favoriteMovies));
  }

  getFavoriteMovies() {
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
