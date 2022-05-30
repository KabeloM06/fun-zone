import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies';
import { Series } from 'src/app/models/series';

import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss']
})
export class SeriesDetailsComponent implements OnInit {

  series: Series | null = null;

  constructor(
    private route: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(({id}) => {
      this.getSeries(id);
    });
  }

  getSeries(id: string){
    this.seriesService.getSeriesDetails(id)
    .subscribe(seriesData => {
      this.series = seriesData;
    })
  }

}
