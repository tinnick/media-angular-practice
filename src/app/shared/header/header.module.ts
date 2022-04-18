import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderModule]
})
export class HeaderModule { }
