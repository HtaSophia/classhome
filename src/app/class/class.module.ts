import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassRoutingModule } from './class-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports: [CommonModule, ClassRoutingModule, DashboardModule],
})
export class ClassModule {}
