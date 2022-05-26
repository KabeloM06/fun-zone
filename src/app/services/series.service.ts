import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Series, SeriesDto } from '../models/series';
import { of, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '2c21aef99f7c1a0368721f86d622b75c'

  constructor(private http : HttpClient) { }

  getSeries(type: string = 'popular', count: number = 10){
    return this.http.get<SeriesDto>(
      `${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`
      ).pipe(switchMap(res => {
        return of(res.results.slice(0, count));
      }));
  }
  searchSeries(page:number){
    return this.http.get<SeriesDto>(
      `${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`
      ).pipe(switchMap(res => {
        return of(res.results);
      }));
  }

  getMovieDetails(id: string){
    return this.http.get<Series>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`
    )
  }
}
