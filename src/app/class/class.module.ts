import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassFormModalComponent } from './class-form-modal/class-form-modal.component';

@NgModule({
    declarations: [ClassFormModalComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ClassModule {}
