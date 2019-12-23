import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  category: string = "";
  htmlSnippet: any;
  actualFeed: any;
  private _fullArticle: boolean;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._fullArticle = false;
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      this.category = x["params"].category;

        if (this.category) {
        this.loadFeed(this.category)
      }
    });

    this._fullArticle = false;
    this.route.params.subscribe(x => {
      this.category = x.category;

      if (this.category) {
        this.loadFeed(this.category)
      }
    });
  }

  get fullArticle(): boolean{
    return this._fullArticle;
  }

  onNavigate(event: any): void{
    this._fullArticle = true;
    this.actualFeed = event;
  }

  private loadFeed(category: string) {
    this.feedService.getFeedContent(category)
      .subscribe((f: FeedResponse) => {
        this.feedTitle = f.title;
        this.feedItems = f.items;
      });
  }
}
