import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-embeded',
  templateUrl: './video-embeded.component.html',
  styleUrls: ['./video-embeded.component.scss']
})
export class VideoEmbededComponent implements OnInit {

  @Input() site: string = "YouTube";
  @Input() key: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
