import { ThemeModule } from './../@theme/theme.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule, routedComponents } from './auth-routing.module';

@NgModule({
  declarations: [...routedComponents],
  imports: [ThemeModule, AuthRoutingModule],
  exports: [],
  providers: []
})
export class AuthModule {}
