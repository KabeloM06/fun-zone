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
    this.moviesServive.getMovies('popular')
    .subscribe((movies)=> {
      this.popularMovies = movies;
    } );
    this.moviesServive.getMovies('upcoming')
    .subscribe((movies)=> {
      this.upcomingMovies = movies;
    } );
    this.moviesServive.getMovies('top_rates')
    .subscribe((movies)=> {
      this.topRatedMovies = movies;
    } );
  }

}
