import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// eslint-disable-next-line import/no-unresolved
import { AccountService } from 'src/app/account/account.service';
import { SubSink } from 'subsink';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public forgotPasswordForm: FormGroup;

    public isLoading = false;

    private subscriptions = new SubSink();

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly accountService: AccountService,
    ) {}

    public ngOnInit(): void {
        this.createForm();
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public onSubmit(): void {
        this.isLoading = true;

        this.subscriptions.sink = this.accountService.signin(this.forgotPasswordForm.value).subscribe((_response) => {
            this.isLoading = false;

            void this.router.navigate(['dashboard']);
        });
    }

    private createForm(): void {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
    }
}
