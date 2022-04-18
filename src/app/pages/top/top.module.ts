import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './components';

@NgModule({
  declarations: [TopPageComponent],
  imports: [CommonModule, MatButtonModule, TopRoutingModule],
})
export class TopModule {}
