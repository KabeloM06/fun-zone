import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-video-embeded',
  templateUrl: './video-embeded.component.html',
  styleUrls: ['./video-embeded.component.scss']
})
export class VideoEmbededComponent implements OnInit {

  @Input() site: string = "YouTube"
  @Input() key: string | null = null;

  constructor(private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeUrl(url: string){
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
