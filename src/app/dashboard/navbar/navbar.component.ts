import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SubSink } from 'subsink';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from '../../class/class.service';
import { getUndefinedValue } from '../../shared/utils/types-helper';
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

    private subscriptions = new SubSink();

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly classService: ClassService,
        private readonly modalService: ModalService,
        private readonly toaster: ToastrService,
    ) {}

    public ngOnInit(): void {
        this.user = this.authService.user;
    }

    public onCreateClassClick(): void {
        this.subscriptions.sink = this.modalService
            .showModal(ClassFormModalComponent as Component, { size: 'md' })
            .pipe(
                switchMap((classDto: ClassRequest) => {
                    if (classDto) {
                        return this.classService.create({ ...classDto, professor: this.user._id });
                    }

                    return of(getUndefinedValue());
                }),
            )
            .subscribe(
                (_result) => {},
                (error) => {
                    this.toaster.error(error);
                },
            );
    }

    public onLogoutClick(): void {
        this.authService.clearStorage();
        void this.router.navigate(['signin']);
    }
}
