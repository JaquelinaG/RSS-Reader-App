import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Feed } from '../models/feed';
import { FeedService } from '../services/feed.service';
import { FeedItem } from '../models/feed-item';
import { FeedResponse } from '../models/feed-response';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  feedTitle: string;
  feedItems: Array<FeedItem>;
  private feedUrl: string = "http://feeds.feedburner.com/TechCrunch";
  private category: string;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.se.queryParams.subscribe(params => {
      this.category = params["category"];
      if(this.category) {
        this.loadFeed(this.category)
      }
    });
  }

  private loadFeed(category: string) {
    this.feedService.getFeedContent(this.feedUrl).subscribe( (f: FeedResponse) => {
      this.feedTitle = f.title;
      this.feedItems = f.items;
    });
  }
}
