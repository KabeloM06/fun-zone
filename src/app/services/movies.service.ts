import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MovieDto } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '2c21aef99f7c1a0368721f86d622b75c'

  constructor(private http : HttpClient) {} 

  getMovies(type: string = 'trending'){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/${type}/all/day?api_key=${this.apiKey}`
      )
  }
}
