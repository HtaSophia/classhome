import { Account } from '../../../../account/account';

interface Message {
    owner: Account;
    date: Date;
    message: string;
}

export interface Chat {
    messages: Message[];
}
