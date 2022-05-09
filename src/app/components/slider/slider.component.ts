import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      //where is the div going
      state('void', style({opacity: 0})),
      transition('void <=> *', [animate('1s')]),
      

    ])
  ]
})
export class SliderComponent implements OnInit {

  @Input() items: Movie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
