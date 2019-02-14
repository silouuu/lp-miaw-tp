import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeModule } from './components/liste/liste.module';
import { TokenStorageService } from './services/token-storage.service';
import { AppInterceptorService } from './services/app-interceptor.service';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { LocalStorageService } from '@rars/ngx-webstorage';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NgxSmartModalModule.forRoot(),

    ListeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    },
    TokenStorageService,
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
