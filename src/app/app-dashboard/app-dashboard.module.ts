import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppDashboardRoutingModule } from './app-dashboard-routing.module';
import { AppDashboardComponent } from './app-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppDashboardComponent
  ],
  imports: [
    CommonModule,
    AppDashboardRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class AppDashboardModule { }
