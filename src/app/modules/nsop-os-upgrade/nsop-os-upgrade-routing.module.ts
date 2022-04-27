import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OsUpgradeComponent } from './nsop-os-upgrade-page/os-upgrade/os-upgrade.component';

const routes: Routes = [
  {
    path: 'os-upgrade',
    component: OsUpgradeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsUpgradeRoutingModule {}
