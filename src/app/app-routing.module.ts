import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { MuralComponent } from './mural/mural/mural.component';

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'mural', component: MuralComponent },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: async () => (await import('./dashboard/dashboard.module')).DashboardModule,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
