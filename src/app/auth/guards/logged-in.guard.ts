import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
    constructor(private readonly router: Router, private readonly authService: AuthService) {}

    public canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            void this.router.navigate(['classes']);
            return false;
        }

        return true;
    }
}
