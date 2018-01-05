import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatboxService {
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    const response = "I'm preparing for the answer. I will be released in next few months.";
    const botMessage = new Message(response, 'bot');
    this.update(botMessage);
  }


  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }
}
