import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedResponse } from '../models/feed-response';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //private url = "http://feeds.feedburner.com/TechCrunch";
  private rssToJsonUrl = 'https://rss2json.com/api.json?rss_url=';

  constructor(private http: HttpClient) { }

  getFeedContent(url: string) : Observable<FeedResponse>{
    return this.http.get<FeedResponse>(`${this.rssToJsonUrl}${url}`);
  }
}