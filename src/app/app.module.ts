import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/my-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { MainModule } from './main';

@NgModule({
  declarations: [
    AppComponent, DemosComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    MainModule, CommonServicesModule, MyCoreModule,
    AppRoutingModule
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
