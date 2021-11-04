import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username: string;

  userId: any;

  profileDetail: any;

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this.userId = localStorage.getItem('userId');

    this._profileService.getPostsComment(this.userId).subscribe(response => {
      // console.log('response', response)
      this.profileDetail = response;
    })
  }

}
