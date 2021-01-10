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
import { ModalComponent } from './modal/modal.component';
import { RefDirective } from './shared/ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    RegisterPageComponent,
    SuccessfullyRegisteredComponent,
    ExpireMsgComponent,
    HeroSelectionComponent,
    ModalComponent,
    RefDirective,
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
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
