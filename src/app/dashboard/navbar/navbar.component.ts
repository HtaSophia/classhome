import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassFormModalComponent } from '../../class/class-form-modal/class-form-modal.component';
import { AuthService } from '../../auth/auth.service';
import { ModalService } from '../../shared/services/modal.service';
import { Account } from '../../account/account';
import { ClassRequest } from '../../class/types/class-request';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    public user: Account;

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly modalService: ModalService,
    ) {}

    public ngOnInit(): void {
        this.user = this.authService.user;
    }

    public onCreateClassClick(): void {
        this.modalService
            .showModal(ClassFormModalComponent as Component, { size: 'md' })
            .subscribe((_classDto: ClassRequest) => {});
    }

    public onLogoutClick(): void {
        this.authService.clearStorage();
        void this.router.navigate(['signin']);
    }
}
