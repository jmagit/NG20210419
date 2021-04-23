import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ERROR_LEVEL, LoggerService, MyCoreModule } from 'src/my-core';

// --- Cargar idioma ---------------------------------------------------------
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
registerLocaleData(localeEs, 'es', localeEsExtra);
// ----------------------------------------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonServicesModule } from './common-services';
import { DemosComponent } from './demos/demos.component';
import { AjaxWaitInterceptor, MainModule } from './main';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, SecurityModule } from './security';
import { ContactosModule } from './contactos';

@NgModule({
  declarations: [
    AppComponent, DemosComponent, DinamicoComponent, FormularioComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MainModule, CommonServicesModule, MyCoreModule, SecurityModule,
    AppRoutingModule, ContactosModule,
  ],
  providers: [
    LoggerService,
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
