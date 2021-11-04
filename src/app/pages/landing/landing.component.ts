import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { ToasterService } from './../../toaster.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    if (this._authService.loggedIn()) {
      this._router.navigate(['/pages/home']);
    }
  }

}
