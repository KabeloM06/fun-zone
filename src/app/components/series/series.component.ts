import { Component, OnInit } from '@angular/core';
import { Series } from 'src/app/models/series';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: Series[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getPagedSeries(1);
  }

  getPagedSeries(page: number){
    this.seriesService.searchSeries(page)
    .subscribe(series => {
      this.series = series;
    });
  }

  paginate(event: any){
    this.getPagedSeries(event.page + 1)
  }
}
