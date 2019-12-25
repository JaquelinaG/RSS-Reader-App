import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FeedService } from '../services/feed.service';
import { FeedItem } from '../models/feed-item';
import { FeedResponse } from '../models/feed-response';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  private _existFeeds: boolean;

  feedTitle: string;
  feedItems: Array<FeedItem>;
  category: string = "";
  actualFeed: any;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
  ) {
    this._existFeeds = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.category = x.category;
      if (this.category) {
        this.loadFeed(this.category);
      }
    });
  }

  get existFeeds(): boolean {
    return this._existFeeds;
  }

  onNavigate(event: any): void {
    this.actualFeed = event;
  }

  private loadFeed(category: string) {
    this.feedService.getFeedContent(category)
      .subscribe((f: FeedResponse) => {
        if (f && f.items && f.items.length > 0) {
          this._existFeeds = true;
          this.feedTitle = f.title;
          this.feedItems = f.items;
        } else {
          this._existFeeds = false;
        }
      });
  }
}
