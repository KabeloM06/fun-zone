import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-video-embeded',
  templateUrl: './video-embeded.component.html',
  styleUrls: ['./video-embeded.component.scss']
})
export class VideoEmbededComponent implements OnInit {

  @Input() site: string = "YouTube"
  @Input() key: string | null = null;

  videoUrl : SafeResourceUrl = '';

  constructor(private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
    this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key)
  }

  getSafeUrl(url: string){
    return this.sanitiser.bypassSecurityTrustResourceUrl(url);
  }

}
