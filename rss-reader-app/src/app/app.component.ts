import { Component, OnInit } from '@angular/core';
import { FeedResponse } from './models/feed-response';
import { Feed } from './models/feed';
import { FeedService } from './services/feed.service';
import { FeedItem } from './models/feed-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rss-reader-app';
  // feedObject: Feed;
  // feedItems: Array<FeedItem>;
  // private feedUrl: string = "http://feeds.feedburner.com/TechCrunch";

  constructor(private feedService: FeedService) {

    // this.feedObject = new Feed();
    
    // this.feedObject.title = "Feed Title";
    // this.feedObject.description = "Description";
  }

  ngOnInit(): void {
    //this.loadFeed();
  }

  // private loadFeed() {
  //   this.feedService.getFeedContent(this.feedUrl).subscribe( (f: FeedResponse) => {
  //     this.feedObject = f.feed;
  //     this.feedItems = f.items;
  //   });
  // }
  
}
