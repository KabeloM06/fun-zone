import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Movie, MovieDto, MovieVideoDto } from '../models/movies';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '2c21aef99f7c1a0368721f86d622b75c'

  constructor(private http : HttpClient) {} 

  getMovies(type: string = 'popular', count: number = 10){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
      ).pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));
  }

  getMovieVideos(id: string){
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      ).pipe(switchMap(res => {
        return of(res.results);
      }));
  }

  searchMovies(page:number){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      ).pipe(switchMap(res => {
        return of(res.results);
      }));
  }

  getMovieDetails(id: string){
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }
}
