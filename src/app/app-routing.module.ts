import { AlphabetComponent } from './alphabet/alphabet.component';
import { HeroSelectionComponent } from './hero-selection/hero-selection.component';
import { ExpireMsgComponent } from './expire-msg/expire-msg.component';
import { SuccessfullyRegisteredComponent } from './successfully-registered/successfully-registered.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'heroselect',
        component: HeroSelectionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'alphabet',
        component: AlphabetComponent,
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
