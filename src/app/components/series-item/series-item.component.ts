import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { IMAGES_SIZES } from 'src/app/constatnts/image-sizes';

@Component({
  selector: 'app-series-item',
  templateUrl: './series-item.component.html',
  styleUrls: ['./series-item.component.scss']
})
export class SeriesItemComponent implements OnInit {

  @Input() itemData: Series | null = null;

  imagesSizes = IMAGES_SIZES;

  constructor() { }

  ngOnInit(): void {
  }

}
