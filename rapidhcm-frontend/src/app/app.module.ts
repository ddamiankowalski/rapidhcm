import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationSharedModule } from './authentication/authenticationshared.module';
import { GlobalInterceptor } from './authentication/services/globalinterceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthModule } from './login/login.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalModule } from './global/global.module';
import { AlertService } from './global/services/alert.service';
import { OutletModule } from './outlets/outlets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FontAwesomeModule,
    AuthenticationSharedModule.forRoot(),
    BrowserAnimationsModule,
    GlobalModule,
    OutletModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    },
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
