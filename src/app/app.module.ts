import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsupgradeModule } from './modules/nsop-os-upgrade/nsop-os-upgrade.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, OsupgradeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
