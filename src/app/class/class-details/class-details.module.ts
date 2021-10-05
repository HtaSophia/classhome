import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassDetailsComponent } from './class-details.component';
import { ClassDetailsRoutingModule } from './class-details-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [ClassDetailsComponent],
    imports: [CommonModule, RouterModule, ClassDetailsRoutingModule, SharedModule],
})
export class ClassDetailsModule {}
