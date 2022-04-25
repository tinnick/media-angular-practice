import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
