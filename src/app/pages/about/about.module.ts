import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs'

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatTabsModule
  ]
})
export class AboutModule { }
