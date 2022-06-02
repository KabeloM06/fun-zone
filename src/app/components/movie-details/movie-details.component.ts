import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constatnts/image-sizes';
import { Movie, MovieVideo } from 'src/app/models/movies';

import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  movie: Movie | null = null;
  imagesSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[]=[];

  constructor(
    private route: ActivatedRoute, 
     
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params
    .pipe(first())
    .subscribe(({id}) => {
    
        this.getMovie(id);
        this.getMovieVideos(id);
           
    });
  }

  ngOnDestroy(): void {
    
  }

  getMovie(id: string){
    this.moviesService.getMovieDetails(id)
    .subscribe(movieData => {
      this.movie = movieData;
    })
  }

  getMovieVideos(id: string){
    this.moviesService.getMovieVideos(id)
    .subscribe(movieVideosData => {
       this.movieVideos = movieVideosData;
    })
  }
  

}
