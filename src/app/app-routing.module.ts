import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SuccessfullyRegisteredComponent } from './successfully-registered/successfully-registered.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { HeroInfoPageComponent } from './hero-info-page/hero-info-page.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { HeroesListComponent } from './user-info-page/heroes-list/heroes-list.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { ExpireMsgComponent } from './expire-msg/expire-msg.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PowerUpsComponent } from './user-info-page/power-ups/power-ups.component';
import { HistoryComponent } from './user-info-page/history/history.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'userinfo',
        component: UserInfoPageComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: '/userinfo/heroeslist',
            pathMatch: 'full',
          },
          {
            path: 'heroeslist',
            component: HeroesListComponent,
          },
          {
            path: 'history',
            component: HistoryComponent,
          },
          {
            path: 'powerups',
            component: PowerUpsComponent,
          },
        ],
      },
      {
        path: 'battle',
        component: BattlePageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'heroselect',
        component: HeroSelectionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'heroinfo/:id',
        component: HeroInfoPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'success',
        component: SuccessfullyRegisteredComponent,
      },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'massage', component: ExpireMsgComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
