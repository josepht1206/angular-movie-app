import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../favorite.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css'],
})
export class FavoriteMoviesComponent implements OnInit {
  favoriteMovies: any[] = [];

  constructor(private favoriteMoviesService: FavoriteMoviesService) {}

  ngOnInit() {
    this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  deleteFavoriteMovie(movie: any) {
    this.favoriteMoviesService.deleteFavoriteMovie(movie);
    this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  editFavoriteMovie(movie: any) {
    let description = prompt(
      'Enter a new description for this movie:',
      movie.description
    );
    if (description) {
      movie.description = description;
    }
  }
}
