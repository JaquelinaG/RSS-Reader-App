import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FeedItem } from '../models/feed-item';
import { FeedService } from '../services/feed.service';
import { FeedResponse } from '../models/feed-response';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  feed: FeedItem;

  constructor(
    private router: Router,
    private service: FeedService,
    private route: ActivatedRoute) {

    const navigation = this.router.getCurrentNavigation();

    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as { feed: FeedItem };
      this.feed = state.feed;
    }
  }

  ngOnInit() {
    if (!this.feed) {
      this.route.params.subscribe(x => {
        let category = x.category;
        let guid = x.guid;

        this.getArticle(category, guid);
      });
    }
  }

  get htmlSnippet(): any {
    return this.feed["content:encoded"];
  }

  private getArticle(category: any, guid: any) {
    if (category && guid) {
      this.service.getFeedContent(category).subscribe((f: FeedResponse) => {
        if (f && f.items) {
          let article = f.items.filter(i => i.guid.includes(guid)).shift();
          if (article) {
            this.feed = article;
          }
          else {
            this.router.navigate(['**']);
          }
        }
      });
    }
  }  
}