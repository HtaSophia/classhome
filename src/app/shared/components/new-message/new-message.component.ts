import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-new-message',
    templateUrl: './new-message.component.html',
    styleUrls: ['./new-message.component.scss'],
})
export class NewMessageComponent {
    @Output()
    public onSendMessageEvent = new EventEmitter<string>();

    public message = '';

    public onSendMessage(): void {
        const message = this.message.trim();

        if (message) {
            this.onSendMessageEvent.emit(message);
            this.message = '';
        }
    }
}
