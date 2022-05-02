import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [OsUpgradeComponent, HomeComponent, AddProjectDetailsComponent],
  exports: [OsUpgradeComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
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
})
export class OsupgradeModule {}
