import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { OsUpgradeComponent } from './nsop-os-upgrade-page/os-upgrade/os-upgrade.component';
import { OsUpgradeRoutingModule } from './nsop-os-upgrade-routing.module';
import { HomeComponent } from './nsop-os-upgrade-page/home/home.component';
import { AddProjectDetailsComponent } from './nsop-os-upgrade-page/add-project-details/add-project-details.component';
import { OsUpgradeUserComponent } from './nsop-os-upgrade-page/os-upgrade-user/os-upgrade-user.component';

@NgModule({
  declarations: [
    OsUpgradeComponent,
    HomeComponent,
    AddProjectDetailsComponent,
    OsUpgradeUserComponent,
  ],
  exports: [OsUpgradeComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    OsUpgradeRoutingModule,
  ],
  providers: [MatDatepickerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OsupgradeModule {}
