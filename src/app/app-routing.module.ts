import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SignInComponent } from './auth/sign-in/sign-in.component';

const routes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'signin', component: SignInComponent },
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
