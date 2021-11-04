import { UserService } from './../../../services/user.service';
import { PostsService } from './../../../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  username: string;

  postDetail: any;

  listUser: any;

  listComment: any;

  allComment: boolean = false;

  constructor(private _activatedRoute: ActivatedRoute,
              private _postService: PostsService,
              private _userService: UserService
    ) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');


    // console.log('listPost', this.listPost)
    this._userService.getUser().subscribe(response => {
      this.listUser = response;
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this._activatedRoute.params.subscribe((params) => {
        this._postService.getPostsById(params['id'])
        .subscribe(response => {
          this.postDetail = response;
          console.log('postDetail', this.postDetail);
        })
        this._postService.getPostsComment(params['id'])
        .subscribe(response => {
          this.listComment = response;
          console.log('listComment', this.listComment);
        })
      })
    }, 1500);
  }

  getUsernameByID(id) {
    if (this.listUser) {
      let user =  this.listUser.filter(user => user.id == id)[0];
      // console.log('user.username', user)
      if (user) {
        return user.username;
      }
    }
  }

  allCommentOpen() {
    this.allComment = !this.allComment;
  }

}
