import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [NavbarComponent, ChatComponent, NewMessageComponent],
    imports: [CommonModule, RouterModule, FormsModule],
    exports: [NavbarComponent, ChatComponent, NewMessageComponent],
})
export class SharedModule {}
