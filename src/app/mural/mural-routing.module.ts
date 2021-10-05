import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuralComponent } from './mural.component';

const routes: Routes = [
    {
        path: '',
        component: MuralComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MuralRoutingModule {}
