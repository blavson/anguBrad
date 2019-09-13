import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit = false;

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.ps.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatePost(post: Post) {
    this.posts.forEach((currentPost, index) => {
      if (currentPost.id === post.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          id: 0,
          title: '',
          body: ''
        };
      }
    });
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  deletePost(post) {
    this.posts.forEach((currentPost, index) => {
      if (currentPost.id === post.id) {
        this.posts.splice(index, 1);
      }
    });
  }
}
