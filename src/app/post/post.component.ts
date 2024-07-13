import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { PostService } from '../Services/post.service';
import { NgFor } from '@angular/common';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts!: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  ngOnInit(): void {
  }

  addNewData() {
    let newPost: Post = {
      id: 7,
      postTitle: "Post 7"
    };

    this.postService.addPost(newPost);
  }

























  // title:string = "List of Posts";
  // messagePost:string = "Message Post";

  // postParent:string = "Message from Post parent";

  // childMessage:string = "Message from child";

  // outputChildMessage: string = "Message from child via output";

  // @Input() fromParent!:string;

  // @Output() messageEvent = new EventEmitter<string>();

  // sendMessage(): void {
  //   console.log("Clicked");
  //   this.messageEvent.emit(this.outputChildMessage);
  // }

}
