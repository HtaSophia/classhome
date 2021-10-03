import { Component, Input } from '@angular/core';
import { Chat } from './types/chat';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
    @Input()
    public chat: Chat;
}
