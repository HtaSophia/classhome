import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthApi } from '../api/auth.api';
import { AuthService } from '../auth/auth.service';
import { LoginRequest } from '../auth/types/login-request';
import { LoginResponse } from '../auth/types/login-response';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    constructor(private readonly authApi: AuthApi, private readonly authService: AuthService) {}

    public signin(dto: LoginRequest): Observable<LoginResponse> {
        return this.authApi.signin(dto).pipe(tap((data) => this.authService.storeUser(data)));
    }
}
