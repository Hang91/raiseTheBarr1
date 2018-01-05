import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Message, ChatboxService } from '../../../services/chatbox.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit{
  @ViewChild('chatbox') private myScrollContainer: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  constructor(public chat: ChatboxService) { }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
    .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
    // this.scrollToBottom();
    // var element = document.getElementById("chatbox");
    // if(element != null){
    //   console.log(element.scrollHeight);
    //   element.scrollTop = element.scrollHeight;
    // }

  }


  // ngAfterViewChecked() {        
  //   this.scrollToBottom();        
  // } 

  // scrollToBottom(): void {
  //   try {
  //       console.log(this.myScrollContainer.nativeElement.scrollHeight);
  //       this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  //   } catch(err) { }                 
  // }

}
