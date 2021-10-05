import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoggedInGuard } from './auth/guards/logged-in.guard';

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', canActivate: [LoggedInGuard], component: SignInComponent },
    { path: 'signup', canActivate: [LoggedInGuard], component: SignUpComponent },
    { path: 'forgot-password', canActivate: [LoggedInGuard], component: ForgotPasswordComponent },
    {
        path: 'classes',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('./class/class.module')).ClassModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
