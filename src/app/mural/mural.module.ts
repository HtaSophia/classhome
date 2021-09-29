import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuralComponent } from './mural/mural.component';
import { MuralheaderComponent } from './muralheader/muralheader.component';



@NgModule({
  declarations: [
    MuralComponent,
    MuralheaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MuralModule { }
