import { Component, Input } from '@angular/core';
import { Chat } from './types/chat';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
    @Input()
    public chat: Chat = {
        messages: [
            { date: new Date(), message: 'Test', owner: { email: 'test@a.com', role: 'student', username: 'Ariel' } },
            { date: new Date(), message: 'Test 2', owner: { email: 'test@a.com', role: 'student', username: 'Pablo' } },
        ],
    };
}
