import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HeaderModule } from '../shared/header';
import { BasePageWrapperComponent } from './templates';


@NgModule({
  declarations: [BasePageWrapperComponent],
  imports: [
    CommonModule,
    HeaderModule,
    PagesRoutingModule
  ]
})
export class PagesModule {}
