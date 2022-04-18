import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomBackgroundDirective } from './directives';

@NgModule({
  declarations: [RandomBackgroundDirective],
  imports: [CommonModule],
  exports: [RandomBackgroundDirective]
})
export class RandomBackgroundModule {}
