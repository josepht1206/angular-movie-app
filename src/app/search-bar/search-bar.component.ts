import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbService } from '../omdb.service';
import { NxTabChangeEvent } from '@aposin/ng-aquila/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  currentIndex = 0;
  searchTerm = '';
  searchYear = '';
  searchType = '';
  searchMovies: any[] = [];

  constructor(
    private omdbService: OmdbService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {}

  search() {
    this.omdbService
      .searchMovies(this.searchTerm, this.searchYear, this.searchType)
      .subscribe(
        (data) => {
          console.log('searched results', data);
          // TODO: Display movie results
        },
        (error) => {
          console.log(error);
        }
      );

    this.http
      .get(
        `http://www.omdbapi.com/?apikey=${this.omdbService.apiKey}&s=${this.searchTerm}&y=${this.searchYear}&type=${this.searchType}`
      )
      .subscribe((response: any) => {
        this.searchMovies = response.Search;
      });
  }

  onTabClick(event: NxTabChangeEvent) {
    this.router.navigate(['/favorites']);
  }
}
