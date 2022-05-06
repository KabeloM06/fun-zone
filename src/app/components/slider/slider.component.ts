import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
