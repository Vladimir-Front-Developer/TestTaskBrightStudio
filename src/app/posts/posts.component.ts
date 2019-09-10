import { Component } from '@angular/core';
import { PostsService, PostInterface } from 'src/app/services/posts.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [ PostsService ]
})
export class PostsComponent {
  posts: Array<PostInterface>
  postForm
  constructor(private postService: PostsService, private formBuilder: FormBuilder){
    this.posts = postService.getAll()
    this.postForm = this.formBuilder.group({
      title:'',
      linkImg:'',
      text:''
    });
  }
  sendPost(dataFormPost){
    let id = String(this.posts.length)
    let post = {
      id: id,
      ...dataFormPost
    }
    this.postService.send(id, post)
    this.posts.push(post)
  }
}