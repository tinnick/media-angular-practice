import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';

import { RandomBackgroundModule } from '../../shared/random-background/random-background.module';
import { Base64Module } from '../../shared/base64/base64.module';


@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    TopRoutingModule,
    MatButtonModule,
    RandomBackgroundModule,
    Base64Module
  ]
})
export class TopModule {}
