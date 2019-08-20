import { Component } from '@angular/core';
import {Message} from "./models/models";
import {ChatService} from "../services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'rxjs-chat';
  messages: any[];
  constructor(private chatService: ChatService) {
  }

  ngOnInit(){
    this.messages = [];
    this.chatService
      .getMessages()
      .subscribe((message: any) => {
        console.log(message.message);
        const user = {
          name: 'tone',
          avatar: 'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_640.jpg'
        };
        
        const messageToSend = {
          text: message.message,
          type: '',
          reply: false,
          date: '',
          quote:'',
          user: user
        };
        this.messages.push(messageToSend);
      });
  }
  sendMessage(message) {
    this.chatService.sendMessage(message);
  }
}
