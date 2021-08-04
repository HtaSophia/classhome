import { Account } from '../../account/account';

export interface LoginResponse {
    user: Account;
    token: string;
}
