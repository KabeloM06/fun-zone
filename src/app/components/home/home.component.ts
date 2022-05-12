import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private moviesServive: MoviesService) { }

  ngOnInit(): void {
    this.moviesServive.getMovies('trending')
    .subscribe((res: any)=> {
      this.popularMovies = res.results;
    } );
    this.moviesServive.getMovies('upcoming')
    .subscribe((res: any)=> {
      this.upcomingMovies = res.results;
    } );
    this.moviesServive.getMovies('top_rates')
    .subscribe((res: any)=> {
      this.topRatedMovies = res.results;
    } );
  }

}
