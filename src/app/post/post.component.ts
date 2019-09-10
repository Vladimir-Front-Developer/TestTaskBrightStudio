import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService, PostInterface } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  post: PostInterface
  constructor(private ar: ActivatedRoute, private postService: PostsService) {
    ar.params.subscribe(param => {
      this.post = postService.getById(param.id)
    })
  }
}
