import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64Pipe } from './base64.pipe';



@NgModule({
  declarations: [Base64Pipe],
  imports: [
    CommonModule
  ]
})
export class Base64Module { }
