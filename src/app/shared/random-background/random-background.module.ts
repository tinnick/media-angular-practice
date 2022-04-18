import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomBackgroundDirective } from './directives/random-background/random-background.directive';

@NgModule({
  declarations: [RandomBackgroundDirective],
  imports: [CommonModule],
  exports: [RandomBackgroundDirective]
})
export class RandomBackgroundModule {}