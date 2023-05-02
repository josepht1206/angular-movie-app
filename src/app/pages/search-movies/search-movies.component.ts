import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbService } from 'src/app/services/omdb/omdb.service';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css'],
})
export class SearchMoviesComponent implements OnInit {
  searchTerm = '';
  searchYear = '';
  searchType = '';
  searchMovies: any[] = [];

  constructor(private omdbService: OmdbService, private http: HttpClient) {}

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
}
