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
import { RefDirective } from './shared/ref.directive';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { HeroesListComponent } from './user-info-page/heroes-list/heroes-list.component';
import { HistoryComponent } from './user-info-page/history/history.component';
import { PowerUpsComponent } from './user-info-page/power-ups/power-ups.component';
import { PowerUpsInfoComponent } from './user-info-page/power-ups/power-ups-info/power-ups-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent,
    RegisterPageComponent,
    SuccessfullyRegisteredComponent,
    ExpireMsgComponent,
    HeroSelectionComponent,
    RefDirective,
    AlphabetComponent,
    UserInfoPageComponent,
    HeroesListComponent,
    HistoryComponent,
    PowerUpsComponent,
    PowerUpsInfoComponent,
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
  entryComponents: [AlphabetComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
