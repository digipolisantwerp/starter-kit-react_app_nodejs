import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServiceModule } from './services';
import { AppComponent } from './app.component';
import { AuiModules } from "./aui.modules";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ...AuiModules,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
