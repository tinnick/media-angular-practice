import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './components/about-page/about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AboutRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AboutModule { }
