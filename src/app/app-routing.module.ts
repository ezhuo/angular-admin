import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './@core/data/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: 'app/@auth/auth.module#AuthModule' },
  {
    path: 'app',
    loadChildren: 'app/pages/pages.module#PagesModule',
    canLoad: [AuthGuard],
    data: { app: true }
  },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
