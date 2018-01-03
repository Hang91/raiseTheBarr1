import { Injectable } from '@angular/core';


// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatboxService {

  constructor() { }

}
