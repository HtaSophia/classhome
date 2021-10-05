import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuralComponent } from './mural.component';
import { MuralRoutingModule } from './mural-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [MuralComponent],
    imports: [CommonModule, MuralRoutingModule, SharedModule],
})
export class MuralModule {}
