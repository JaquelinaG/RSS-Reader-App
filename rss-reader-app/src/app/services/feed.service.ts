import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedResponse } from '../models/feed-response';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private url = "/api/feeds";

  constructor(private http: HttpClient) { }

  getFeedContent(category: string) : Observable<FeedResponse>{
    return this.http.get<FeedResponse>(`${this.url}`, {
      params: {
        category: category
      }
    });
  }
}