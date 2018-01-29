import { SharedModule } from '../../@shared/shared.module';
import { ThemeModule } from '../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { PassportRoutingModule, routedComponents } from './passport-routing.module';

@NgModule({
    declarations: [...routedComponents],
    imports: [ThemeModule, PassportRoutingModule, SharedModule],
    exports: [],
    providers: []
})
export class PassportModule { }
