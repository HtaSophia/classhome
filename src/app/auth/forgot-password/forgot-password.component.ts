import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
// eslint-disable-next-line import/no-unresolved

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    public forgotPasswordForm: FormGroup;

    public ngOnInit(): void {
        this.createForm();
    }

    private createForm(): void {}
}
