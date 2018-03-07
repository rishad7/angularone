import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {SharedModule} from '../shared/shared.module';
import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(DashboardRoutes),
      SharedModule
  ],
  declarations: [DashboardComponent, WorldMapComponent]
})

export class DashboardModule {}
