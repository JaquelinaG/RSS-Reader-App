import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedResponse } from '../models/feed-response';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  getFeedContent(category: string) : Observable<FeedResponse>{
    return this.http.get<FeedResponse>(`/api/feeds`, {
      params: {
        category: category
      }
    });
  }
}