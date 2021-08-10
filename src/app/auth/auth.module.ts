import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
})
export class AuthModule {}
