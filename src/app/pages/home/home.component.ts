import { UserService } from './../../services/user.service';
import { PostsService } from './../../services/posts.service';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string;

  listPost: any;

  listUser: any;

  commentByIdPost: any[] = [];

  p: number = 1;

  constructor(private _authService: AuthService,
              private _postService: PostsService,
              private _userService: UserService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('userName');
    this._postService.getPosts().subscribe(response => {
      this.listPost = response;
    })
    // console.log('listPost', this.listPost)
    this._userService.getUser().subscribe(response => {
      this.listUser = response;
    })
    setTimeout(() => {
      for (let post of this.listPost) {
        this._postService.getPostsComment(post.id).subscribe(response => {
          this.commentByIdPost.push(response);
          // console.log('commentByIdPost', commentByIdPost)
        })
      }
    }, 1000);
  }

  getUsernameByID(id) {
    if (this.listUser) {
      let user =  this.listUser.filter(user => user.id == id)[0];
      // console.log('user.username', user)
      return user.username;
    }
  }

  gettotalComment(postId) {
    console.log('commentByIdPost', this.commentByIdPost.length)
  }

}
