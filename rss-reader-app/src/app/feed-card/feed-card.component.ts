import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../models/feed-item';
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: FeedItem;

  // private uriDetail: SafeUrl = null;
  // private sanitizer: DomSanitizer;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  // get uriRPe(): SafeUrl {
  //   return this.uriDetail;
  // }

  onNavigate(event: string) {
    window.open(this.feed.link, "_blank");
    //this.uriDetail = "";
    //this.generateUriDetail();
    //this.router.onNavigate()
  }

  // generateUriDetail(): void {
  //   this.uriDetail = this.sanitizer.bypassSecurityTrustResourceUrl(this.uriDetail);
  // }
}