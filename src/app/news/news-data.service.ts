import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NewsItem } from './newsitem.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class NewsDataService {
  private _appUrl = 'http://localhost:4200/API/';

  constructor(private auth: AuthenticationService, private http: Http) { }

  newsItems(): Observable<NewsItem[]> {
    return this.http.get(this._appUrl + 'news').map(response =>
      response.json().map(item => {
        return new NewsItem(item._id, item.title, item.description, item.text);
      }
      )
    );
  }

  newsItem(id): Observable<NewsItem> {
    return this.http.get(`${this._appUrl}news/${id}`)
      .map(response => response.json()).map(item => {
       return NewsItem.fromJSON(item);
      }
    );
  }

  addNewsItem(rec): Observable<NewsItem> {
    return this.http.post(`${this._appUrl}news/`, rec, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(response => response.json())
    .map(item => NewsItem.fromJSON(item));
  }




}