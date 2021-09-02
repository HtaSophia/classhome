import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassCardComponent } from './class-card/class-card.component';
import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { ClassFormModalComponent } from './class-form-modal/class-form-modal.component';

@NgModule({
    declarations: [ClassComponent, ClassListComponent, ClassCardComponent, ClassFormModalComponent],
    imports: [CommonModule, ClassRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ClassModule {}
