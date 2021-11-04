import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _httpClient: HttpClient) { }

  getPosts() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts')
        .map((response) => response)
  }

  getPostsById(postId) {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts/'+postId)
        .map((response) => response)
  }

  getPostsComment(postId) {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments')
        .map((response) => response)
  }
}
