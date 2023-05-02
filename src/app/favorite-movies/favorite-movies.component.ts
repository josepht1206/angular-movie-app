import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../services/favorite/favorite.service';

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
}
