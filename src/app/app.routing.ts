import { SettingsComponent } from './settings/settings.component';
import { MeddelandenComponent } from './meddelanden/meddelanden.component';
import { InkopComponent } from './inkop/inkop.component';
import { BehovComponent } from './behov/behov.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', component: DashboardComponent },
    { path: 'behov', component: BehovComponent },
    { path: 'inkop', component: InkopComponent },
    { path: 'meddelanden', component: MeddelandenComponent },
    { path: 'installningar', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
