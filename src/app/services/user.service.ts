import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  userService: [] = [];

    constructor(private _httpClient: HttpClient) { }

    getUser() {
      return this._httpClient.get('https://jsonplaceholder.typicode.com/users')
          .map((response) => response)
    }

    setUser(user) {
      this.userService = user;

      console.log('userService', this.userService)
    }

    getUserService() {
      return this.userService;

    }
}
