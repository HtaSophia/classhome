import { Notice } from '../../mural/types/notice';
import { Account } from '../../account/account';

export interface Class {
    _id?: string;
    name: string;
    description: string;
    professor: Account;
    students?: Account[];
    notices: Notice[];
}
