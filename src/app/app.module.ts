import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuccessfullyRegisteredComponent } from './successfully-registered/successfully-registered.component';
import { HeroSelectionItemComponent } from './hero-selection/hero-selection-item/hero-selection-item.component';
import { BattlePowerUpsComponent } from './battle-page/battle-power-ups/battle-power-ups.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { PowerUpsInfoComponent } from './user-info-page/power-ups/power-ups-info/power-ups-info.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';
import { RecentSearchComponent } from './hero-selection/recent-search/recent-search.component';
import { ResultModalComponent } from './battle-page/result-modal/result-modal.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HeroesListComponent } from './user-info-page/heroes-list/heroes-list.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ExpireMsgComponent } from './expire-msg/expire-msg.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { PowerUpsComponent } from './user-info-page/power-ups/power-ups.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './user-info-page/history/history.component';
import { AppComponent } from './app.component';
import { RefDirective } from './shared/ref.directive';

@NgModule({
  declarations: [
    SuccessfullyRegisteredComponent,
    HeroSelectionItemComponent,
    BattlePowerUpsComponent,
    HeroSelectionComponent,
    UserInfoPageComponent,
    RegisterPageComponent,
    PowerUpsInfoComponent,
    HeroInfoPageComponent,
    RecentSearchComponent,
    ResultModalComponent,
    MainLayoutComponent,
    BattlePageComponent,
    HeroesListComponent,
    LoginPageComponent,
    ExpireMsgComponent,
    AlphabetComponent,
    PowerUpsComponent,
    HistoryComponent,
    AppComponent,
    RefDirective,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatNativeDateModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
  entryComponents: [
    ResultModalComponent,
    BattlePageComponent,
    AlphabetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
