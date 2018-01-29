import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassportComponent } from './passport.component';
import { AuthLoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: PassportComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent
      },
      {
        path: '',
        component: AuthLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassportRoutingModule { }

export const routedComponents = [PassportComponent, AuthLoginComponent];
