import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  apiKey = '73e230e9';
  apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string, year: string, type: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${searchTerm}&y=${year}&type=${type}`;
    return this.http.get(url);
  }
}
