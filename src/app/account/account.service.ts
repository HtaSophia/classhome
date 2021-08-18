import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthApi } from '../api/auth.api';
import { LoginRequest } from '../auth/types/login-request';
import { LoginResponse } from '../auth/types/login-response';
import { SignUpRequest } from '../auth/types/signup-request';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private readonly authApi: AuthApi) {}

    public signin(dto: LoginRequest): Observable<LoginResponse> {
        return this.authApi.signin(dto);
    }

    public signup(dto: SignUpRequest): Observable<LoginResponse> {
        return this.authApi.signup(dto);
    }
}
