import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../models/feed-item';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: FeedItem;

  constructor() { }

  ngOnInit() {
    
  }

  onNavigate(event: string) {
    window.open(this.feed.link, "_blank");
  }
}