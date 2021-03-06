import { BreadcrumbsService } from './breadcrumbs/breadcrumbs.service';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './service/auth.service';
import { CookieService } from './service/cookie.service';
import { GuardChildPermissionService } from './service/guard-child-permission.service';
import { ValidateService } from './service/validate.service';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Injector } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HttpInterceptorProviders } from './interceptors';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  COMMON_INTERCEPTOR_HEADER,
  COMMON_PROVIDERS_TOKEN,
  CONFIG, ServieTypeEnum
  // COMMON_TOKEN_WRAPPER_TOKEN,
} from './common/CONFIG';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    // import HttpClientModule after BrowserModule
    HttpClientModule,
    // mock 模式下 模拟数据
    CONFIG.serviceType === ServieTypeEnum.MOCK ? HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ) : [],
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    AppRoutes
  ],
  bootstrap: [AppComponent],
  providers: [
    BreadcrumbsService,
    AuthService,
    HttpService,
    ValidateService,
    GuardChildPermissionService,
    { provide: COMMON_PROVIDERS_TOKEN, useValue: {} },
    { provide: COMMON_INTERCEPTOR_HEADER, useValue: 'Authorization' },
    InMemoryDataService,
    HttpInterceptorProviders,
  ]
})
export class AppModule { }
