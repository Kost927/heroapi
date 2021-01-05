import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { SuccessfullyRegisteredComponent } from './successfully-registered/successfully-registered.component';
import { ExpireMsgComponent } from './expire-msg/expire-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    RegisterPageComponent,
    TestComponentComponent,
    SuccessfullyRegisteredComponent,
    ExpireMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
