import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  title:string = "List of Posts";
  messagePost:string = "Message Post";

  postParent:string = "Message from Post parent";

  childMessage:string = "Message from child";

  outputChildMessage: string = "Message from child via output";

  @Input() fromParent!:string;

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(): void {
    console.log("Clicked");
    this.messageEvent.emit(this.outputChildMessage);
  }

}
