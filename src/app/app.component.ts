import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NumberSymbol,
  PercentPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';
import { AppendPipe } from './Pipes/append.pipe';
import { AppendCLIPipe } from './Pipes/append-cli.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { PostService } from './Services/post.service';
import { PostListComponent } from "./post-list/post-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    PostComponent,
    FormsModule,
    NgFor,
    JsonPipe,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    PercentPipe,
    SlicePipe,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    PostListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PostService]
})
export class AppComponent {

  title: string = "Angular Course";
  count: number = 4564258;
  dcValue: number = 3.41564848;

  price: number = 99.99;

  today: Date = new Date();

  postObj: object = {
    id: 1,
    postTitle: "Post 1"
  };

  postArray: Array<string> = [
    "post 1",
    "post 2",
    "post 3",
    "post 4",
    "post 5",
    "post 6",
  ];

  userdetails = {
    name: "User 1",
    city: "Newyork",
    countryCode: "US"
  };

  dummyText: string = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";



  // name!: string;
  // email!: string;
  // address!: string;

  // userArray: Array<any> = [];

  // onClick() {
  //   this.userArray.push({
  //     name: this.name,
  //     email: this.email,
  //     address: this.address,
  //   });

  //   console.log(this.userArray);
    
  // }

  // onDelete(index: number) {
  //     this.userArray.splice(index, 1);
  // }

  // isActive: boolean = true;

  // stepForm: string = "Something Else";

  // postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  // objArray: Array<any> = [
  //     { id: 1, postTitle: 'Post 1' },
  //     { id: 2, postTitle: 'Post 2' },
  //     { id: 3, postTitle: 'Post 3' },
  //     { id: 4, postTitle: 'Post 4' },
  //     { id: 5, postTitle: 'Post 5' }
  // ];

  // constructor() {
  //   for(let i = 0; i < this.postArray.length; i++) {
  //     console.log(this.postArray[i]);

  //   }
  // }

  // addNew() {
  //   this.objArray.push({ id: 6, postTitle: 'Post 6' });
  // }

  // onDelete(index: any) {
  //   //splice method to remove an array object, and the second parameter - how many objects we want to delete
  //   this.objArray.splice(index, 1);
  // }

  // onClick(status: string) {
  //     this.stepForm = status;
  // }

  // postTitle!: string;
  // postDetails!: string;
  // imageURL!: string;
  // postURL!: string;
  // addBackground!: boolean;

  //Task! - part 7
  // postTitle!: string;
  // postDetails!: string;
  // postImageUrl!: string;
  // postUrl!: string;
  // moreDetails!: string;
  // checkbox!: boolean;

  // onPostTitle($event: any): void {
  //     this.postTitle = $event.target.value;
  // }

  // onPostDetails($event: any): void {
  //   this.postDetails = $event.target.value;
  // }

  // onPostImageUrl($event: any): void {
  //   this.postImageUrl = $event.target.value;
  // }

  // onPostUrl($event: any): void {
  //   this.postUrl = $event.target.value;
  //   this.moreDetails = "More Details";
  // }

  // onCheckbox() {
  //     this.checkbox = true;
  // }

  // -----------------------------------------------------------------------------------

  // export class AppComponent implements AfterViewInit {
  // userName!: string; // Եթե արժեք դեռ չենք վերագրեմ թոթոխականի կողքը ! կդնենք։
  // textValue: string = "Value is coming from the component";

  // mainMessage: string = 'Message from TypeScript component file';

  // title = 'AngIntro';
  // parentMessage: string = 'Message Changed';

  // message!: string;
  // fromChildOutput!: string;

  // imgUrl: string =
  //   'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  // @ViewChild(PostComponent) childComp!: PostComponent;

  // bool: boolean = false;

  // constructor() {}

  // ngAfterViewInit(): void {
  //   console.log(this.childComp);
  //   this.message = this.childComp.childMessage;
  // }

  // receiveMessage($event: string) {
  //   console.log($event);
  //   this.fromChildOutput = $event;
  // }

  // buttonClick() {
  //   console.log('Button click event worked!');
  // }

  // // Երբ մե տառմ էլ կգրես input դաշտի մեջ, ամեն սիմվոլը keyup է։
  // // 13-ը enter-ի keyCode-ն է, կսենք եթե enter սեղմին նոր log էրա keyup երը, որպեսզի ամեն տառը գրելուց log չենե, ոչ թե if-ով ստուգենք,
  // // որ եթե enter-ի keyCode-ն է՝ 13-ը՝ նոր log էրա, այլ սպես keyup-ը մենակ enter event-ի դեպքում կաշխատի
  // // onKeyup($event: any): void {
  // //     console.log($event.target.value);
  // // }

  // // onKeyup(username: any): void {
  // //   console.log(username);
  // // }

  // // onKeyup() {
  // //   console.log(this.userName);  //In order to get the variable from the method, we use 'this' keyword
  // // }

  // onKeyup() {
  //   console.log(this.textValue);
  // }
}
