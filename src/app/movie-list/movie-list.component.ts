import { Component, Input, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../favorite.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movies: any[] = [];

  constructor(private favoriteMoviesService: FavoriteMoviesService) {}

  ngOnInit() {}

  addFavoriteMovie(movie: any) {
    let description = prompt('Enter a description for this movie:');
    if (description) {
      this.favoriteMoviesService.addFavoriteMovie(movie, description);
    }
  }
}
