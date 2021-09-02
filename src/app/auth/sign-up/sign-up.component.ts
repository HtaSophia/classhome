import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubSink } from 'subsink';
import { AccountService } from '../../account/account.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
    public signUpForm: FormGroup;

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
        this.subscriptions.sink = this.accountService.signup(this.signUpForm.value).subscribe(
            (_response) => {
                this.isLoading = false;
                this.toaster.success('Conta criada com sucesso!');
                void this.router.navigate(['dashboard']);
            },
            (error) => {
                this.isLoading = false;
                this.toaster.error(error, 'Error');
            },
        );
    }

    private createForm(): void {
        this.signUpForm = this.formBuilder.group(
            {
                username: ['', Validators.required],
                email: ['', Validators.compose([Validators.required, Validators.email])],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required],
                role: ['', Validators.required],
            },
            { validators: [this.matchPassword] },
        );
    }

    private matchPassword = (control: AbstractControl): { matchPass: boolean } => {
        let validator: { matchPass: boolean };

        if (control.get('password').value !== control.get('confirmPassword').value) {
            validator = { matchPass: true };
        }

        return validator;
    };
}
