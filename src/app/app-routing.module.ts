import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OsUpgradeUserComponent } from './modules/nsop-os-upgrade/nsop-os-upgrade-page/os-upgrade-user/os-upgrade-user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: OsUpgradeUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
