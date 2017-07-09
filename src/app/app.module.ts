import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BehovComponent } from './behov/behov.component';
import { InkopComponent } from './inkop/inkop.component';
import { MeddelandenComponent } from './meddelanden/meddelanden.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BehovComponent,
    InkopComponent,
    MeddelandenComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
