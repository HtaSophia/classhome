import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public forgotPasswordForm: FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly router: Router,
        private readonly toaster: ToastrService,
    ) {}

    public ngOnInit(): void {
        this.createForm();
    }

    public onSubmit(): void {
        this.toaster.success('Email enviado!');
        void this.router.navigate(['signin']);
    }

    private createForm(): void {
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
    }
}
