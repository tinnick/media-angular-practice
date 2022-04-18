import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    TopRoutingModule
  ]
})
export class TopModule { }
