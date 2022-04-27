import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { OsUpgradeComponent } from './nsop-os-upgrade-page/os-upgrade/os-upgrade.component';
import { OsUpgradeRoutingModule } from './nsop-os-upgrade-routing.module';
import { HomeComponent } from './nsop-os-upgrade-page/home/home.component';

@NgModule({
  declarations: [OsUpgradeComponent, HomeComponent],
  exports: [OsUpgradeComponent],
  imports: [RouterModule, CommonModule, MatTableModule, OsUpgradeRoutingModule],
})
export class OsupgradeModule {}
