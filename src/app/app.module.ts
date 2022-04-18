import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
