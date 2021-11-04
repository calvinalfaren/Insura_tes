import {Injectable} from '@angular/core';
import {Observable} from '../../node_modules/rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map'
import { UserContent, AccountActivateContent } from "./models/user.model";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {

  readonly AUTH_LEVEL: string = "authLevel";

  constructor(
    private _httpClient: HttpClient,
    private _cookieService : CookieService,
    ) {
  }

  userKey(user) {
    localStorage.setItem('userKey', user);
    localStorage.setItem('userName', user.username);
    localStorage.setItem('userId', user.id);
  }

  logout() {
    localStorage.removeItem('userKey');
    localStorage.removeItem('userName');
  }

  loggedIn(): boolean {
    return localStorage.getItem('userKey') != null;
  }

  getUser() {
    return localStorage.getItem('userKey');
  }
}

export interface AuthResponse extends Response {
  authKey: string;
}
