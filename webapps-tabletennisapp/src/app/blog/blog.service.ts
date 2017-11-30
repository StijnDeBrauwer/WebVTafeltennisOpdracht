import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http, Headers } from '@angular/http';
import { Post } from './post.model';
import { AuthenticationService } from '../user/authentication.service';


@Injectable()
export class BlogService {
  private _appUrl = 'http://localhost:4200/API/';
    constructor(private http: Http, private auth: AuthenticationService) { }

    posts(): Observable<Post[]> {
      return this.http.get(`${this._appUrl}blog/`, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => response.json().map(item => 
        { 
          console.log(item);
          return Post.fromJSON(item);
        }));
    }


    addPost(rec): Observable<Post> {
      console.log(rec);
      return this.http.post(`${this._appUrl}/blog`, rec, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
        .map(res => res.json()).map(item => Post.fromJSON(item));


    }
}