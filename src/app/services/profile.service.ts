import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient: HttpClient) { }

  getPostsComment(userId) {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users/'+userId)
        .map((response) => response)
  }
}
