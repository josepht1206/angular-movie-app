import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  apiKey = '73e230e9';
  apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: any, year: any, type: any) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${searchTerm}&y=${year}&type=${type}`;
    return this.http.get(url);
  }
}
