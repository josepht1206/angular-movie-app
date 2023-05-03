import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbService } from 'src/app/services/omdb/omdb.service';
import { FormBuilder, Validators } from '@angular/forms';

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

  form = new FormBuilder().group({
    searchType: ['', Validators.required],
    searchTerm: ['', Validators.required],
    searchYear: ['', Validators.required],
  });

  patch(value: string) {
    this.form.patchValue({ searchType: value });
    this.form.patchValue({ searchTerm: value });
    this.form.patchValue({ searchYear: value });
  }

  constructor(private omdbService: OmdbService, private http: HttpClient) {}

  ngOnInit() {}

  search() {
    console.log(this.form.value.searchTerm);
    this.omdbService
      .searchMovies(
        this.form.value.searchTerm,
        this.form.value.searchYear,
        this.form.value.searchType
      )
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
        `http://www.omdbapi.com/?apikey=${this.omdbService.apiKey}&s=${this.form.value.searchTerm}&y=${this.form.value.searchYear}&type=${this.form.value.searchType}`
      )
      .subscribe((response: any) => {
        this.searchMovies = response.Search;
      });
  }
}
