import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClassDetailsComponent } from './class-details.component';
import { ClassDetailsRoutingModule } from './class-details-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PeopleComponent } from './people/people.component';

@NgModule({
    declarations: [ClassDetailsComponent, PeopleComponent],
    imports: [CommonModule, RouterModule, ClassDetailsRoutingModule, SharedModule],
})
export class ClassDetailsModule {}
