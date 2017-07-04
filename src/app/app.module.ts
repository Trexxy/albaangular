import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BehovComponent } from './behov/behov.component';
import { InkopComponent } from './inkop/inkop.component';
import { MeddelandenComponent } from './meddelanden/meddelanden.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BehovComponent,
    InkopComponent,
    MeddelandenComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
