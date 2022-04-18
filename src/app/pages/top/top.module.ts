import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';

import { RandomBackgroundModule } from '../../shared/random-background/random-background.module';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    RandomBackgroundModule
  ]
})
export class TopModule { }
