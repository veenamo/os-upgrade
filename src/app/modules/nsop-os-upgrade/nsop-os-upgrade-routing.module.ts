import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OsUpgradeComponent } from './nsop-os-upgrade-page/os-upgrade/os-upgrade.component';
import { OsUpgradeUserComponent } from './nsop-os-upgrade-page/os-upgrade-user/os-upgrade-user.component';
const routes: Routes = [
  {
    path: 'os-upgrade',
    component: OsUpgradeComponent,
  },
  {
    path: 'os-upgrade-user',
    component: OsUpgradeUserComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsUpgradeRoutingModule {}
