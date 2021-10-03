import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
    declarations: [ChatComponent, NewMessageComponent],
    imports: [CommonModule, FormsModule],
    exports: [ChatComponent, NewMessageComponent],
})
export class SharedModule {}
