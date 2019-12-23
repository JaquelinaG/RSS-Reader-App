import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../models/feed-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() feed: FeedItem;
  //feed: FeedItem;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

    get htmlSnippet(): any{
    return this.feed["content:encoded"];
  }

}
