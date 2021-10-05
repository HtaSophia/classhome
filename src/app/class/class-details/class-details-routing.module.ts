import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../../auth/guards/logged-in.guard';
import { ClassDetailsComponent } from './class-details.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'people', canActivate: [LoggedInGuard], component: PeopleComponent },
    {
        path: '',
        component: ClassDetailsComponent,
        children: [
            { path: '', redirectTo: 'mural', pathMatch: 'full' },
            {
                path: 'mural',
                loadChildren: async () => (await import('../../mural/mural.module')).MuralModule,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClassDetailsRoutingModule {}
