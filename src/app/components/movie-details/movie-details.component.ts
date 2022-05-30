import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies';
import { Series } from 'src/app/models/series';
import { MoviesService } from 'src/app/services/movies.service';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | null = null;
 

  constructor(
    private route: ActivatedRoute, 
     
    private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(({id}) => {
    
        this.getMovie(id);
           
    });
  }

  getMovie(id: string){
    this.moviesService.getMovieDetails(id)
    .subscribe(movieData => {
      this.movie = movieData;
    })
  }
  

}
