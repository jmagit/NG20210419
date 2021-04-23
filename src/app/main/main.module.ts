import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { HomeComponent } from './home/home.component';
import { AjaxWaitComponent } from './ajax-wait';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SecurityModule } from '../security';



@NgModule({
  declarations: [
    NotificationComponent,
    HomeComponent,
    AjaxWaitComponent,
    HeaderComponent,
  ],
  exports: [
    NotificationComponent,
    HomeComponent,
    AjaxWaitComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild([]), SecurityModule,
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
