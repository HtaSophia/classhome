import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ClassCardComponent } from './class-card/class-card.component';
import { ClassFormModalComponent } from './class-form-modal/class-form-modal.component';
import { ClassListComponent } from './class-list/class-list.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    declarations: [ClassListComponent, ClassCardComponent, ClassFormModalComponent, DashboardComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class DashboardModule {}
