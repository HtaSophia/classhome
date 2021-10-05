import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { Account } from '../../../account/account';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @Input()
    public mode: 'class-details' | 'class-list' = 'class-list';

    @Output()
    public createClassEvent = new EventEmitter<void>();

    public user: Account;

    constructor(private readonly router: Router, private readonly authService: AuthService) {}

    public ngOnInit(): void {
        this.user = this.authService.user;
    }

    public onCreateClassClick(): void {
        this.createClassEvent.emit();
    }

    public onLogoutClick(): void {
        this.authService.clearStorage();
        void this.router.navigate(['signin']);
    }
}
