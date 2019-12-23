import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeedItem } from '../models/feed-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css']
})
export class FeedCardComponent implements OnInit {

  @Input() feed: FeedItem;
  @Output() navigate: EventEmitter<any> = new EventEmitter();

  private _fullArticle: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this._fullArticle = false;
  }

  get fullArticle (): boolean {
    return this._fullArticle;
  }

  onNavigate(event: any) {
    this.navigate.emit(this.feed);
  } 
}