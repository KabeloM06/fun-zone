import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) {} 

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/trending/all/day?api_key=2c21aef99f7c1a0368721f86d622b75c')
  }
}
