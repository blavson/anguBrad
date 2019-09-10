import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  constructor(private ps: PostService) {}

  ngOnInit() {}

  addPost(title, body) {
    this.ps.savePost({ title, body } as Post).subscribe(post => {
      console.log(post);
    });
  }
}
