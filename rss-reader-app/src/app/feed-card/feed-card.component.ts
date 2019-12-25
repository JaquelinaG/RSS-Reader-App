import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../models/feed-item';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: FeedItem;
  @Output() navigate: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: FeedService) { }

  ngOnInit() {

  }

  onNavigate(event: any) {
    this.route.params.subscribe(x => {
      let category = x.category;
      let guid = this.service.getFeedGuid(this.feed.guid);

      const navExtras: NavigationExtras = { state: { feed: this.feed } };
      this.router.navigate(['feeds/article', category, guid], navExtras);

    });
  }
}