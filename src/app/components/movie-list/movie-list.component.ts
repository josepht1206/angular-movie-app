import { Component, Input, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: any[] = [];
  @Input() currentIndex: any;

  constructor(private favoriteMoviesService: FavoriteMoviesService) {}

  ngOnInit() {
    console.log('currentIndex', this.currentIndex);
  }

  addFavoriteMovie(movie: any) {
    let description = prompt('Enter a description for this movie:');
    if (description) {
      this.favoriteMoviesService.addFavoriteMovie(movie, description);
    }
  }

  deleteFavoriteMovie(movie: any) {
    this.favoriteMoviesService.deleteFavoriteMovie(movie);
    console.log('deleted movie ', movie);
    // this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  editFavoriteMovie(movie: any) {
    console.log('editing movie', movie);
    let description = prompt(
      'Enter a new description for this movie:',
      movie.description
    );
    if (description) {
      movie.Description = description;
    }
  }
}
