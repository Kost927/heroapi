import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SuccessfullyRegisteredComponent } from './successfully-registered/successfully-registered.component';
import { ExpireMsgComponent } from './expire-msg/expire-msg.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { AlphabetComponent } from './alphabet/alphabet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    RegisterPageComponent,
    SuccessfullyRegisteredComponent,
    ExpireMsgComponent,
    HeroSelectionComponent,
    AlphabetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
