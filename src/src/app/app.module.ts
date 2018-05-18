import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InputCompnentComponent } from './input-compnent/input-compnent.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AppComponent, HelloComponent, InputCompnentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
