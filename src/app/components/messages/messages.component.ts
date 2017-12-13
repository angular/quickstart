import {Component} from '@angular/core';
import {MessageService} from './message.service';
@Component({
    selector:'app-message',
    templateUrl:'./message.template.html',
    styleUrls:['./messages.styles.css']
})
export class MessageComponent{
constructor(public messageService:MessageService){
    
}
}