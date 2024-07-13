import { Component, Input } from '@angular/core';
import { PostService } from '../Services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  // @Input() fromPostParent!: string;

  postList!: Array<any>;

  constructor(private postService: PostService) {
      this.postList = postService.postList;
  }

}
