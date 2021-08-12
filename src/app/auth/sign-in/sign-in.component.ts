import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubSink } from 'subsink';
import { AccountService } from '../../account/account.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
    public signInForm: FormGroup;

    public isLoading = false;

    private subscriptions = new SubSink();

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly accountService: AccountService,
        private readonly toaster: ToastrService,
    ) {}

    public ngOnInit(): void {
        this.createForm();
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public onSubmit(): void {
        this.isLoading = true;

        this.subscriptions.sink = this.accountService.signin(this.signInForm.value).subscribe(
            (_response) => {
                this.isLoading = false;
                void this.router.navigate(['dashboard']);
            },
            (_error) => {
                this.isLoading = false;
                this.toaster.error('Email ou Senha incorreta', 'Error');
            },
        );
    }

    private createForm(): void {
        this.signInForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
        });
    }
}
