import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';
import { IMAGES_SIZES } from 'src/app/constatnts/image-sizes';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() itemData: Movie | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
