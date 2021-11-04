import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { ToasterService } from './../../toaster.service';
import { UserService } from './../../services/user.service';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
    selector: 'az-login',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  listUser: any;

  username: string;

  password: string;

  constructor(
    private _userService: UserService,
    private _toasterService: ToasterService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._authService.loggedIn()) {
      this._router.navigate(['/pages/home']);
    }
    this._userService.getUser().subscribe(response => {
      // console.log('response', response)
      this.listUser = response;
    })
  }

  login() {
    console.log(this.username, this.password)
    if (!this.username) {
      document.getElementById('ipt-user').style.border = '1px solid red';
      this._toasterService.openToast(null, "Please input username", 'error');
    }
    if (!this.password) {
      document.getElementById('ipt-pass').style.border = '1px solid red';
      this._toasterService.openToast(null, "Please input password", 'error');
    }
    if (this.listUser.filter(user => user.username == this.username).length >= 1) {
      let user = this.listUser.filter(user => user.username == this.username)[0];
      if (this.username == this.password) {
        console.log('oke')
        this._authService.userKey(user);
        this._router.navigate(['/pages/home']);
      } else {
        console.log('salah')
      }
    }
  }
}
