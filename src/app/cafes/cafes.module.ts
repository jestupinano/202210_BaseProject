import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCafeComponent } from './lista-cafe/lista-cafe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListaCafeComponent],
  exports: [ListaCafeComponent]
})
export class CafesModule { }
