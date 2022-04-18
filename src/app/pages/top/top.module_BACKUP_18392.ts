import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';

<<<<<<< HEAD
import { RandomBackgroundModule } from '../../shared/random-background/random-background.module';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    RandomBackgroundModule
  ]
=======
@NgModule({
  declarations: [TopPageComponent],
  imports: [CommonModule, MatButtonModule, TopRoutingModule],
>>>>>>> f5fb78785b1d83316fbf1237a527d1acd55738e6
})
export class TopModule {}
