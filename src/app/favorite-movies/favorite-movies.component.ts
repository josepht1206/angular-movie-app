import { Component, OnInit } from '@angular/core';
import { FavoriteMoviesService } from '../favorite.service';
import { NxTabChangeEvent } from '@aposin/ng-aquila/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css'],
})
export class FavoriteMoviesComponent implements OnInit {
  currentIndex = 1;
  favoriteMovies: any[] = [];

  constructor(
    private favoriteMoviesService: FavoriteMoviesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favoriteMovies = this.favoriteMoviesService.getFavoriteMovies();
  }

  onTabClick(event: NxTabChangeEvent) {
    this.router.navigate(['/']);
  }
}
