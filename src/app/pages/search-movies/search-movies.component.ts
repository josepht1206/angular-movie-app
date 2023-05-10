import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OmdbService } from 'src/app/services/omdb/omdb.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss'],
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
        (data: any) => {
          console.log('searched results', data);
          // TODO: Display movie results
          this.searchMovies = data.Search;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
