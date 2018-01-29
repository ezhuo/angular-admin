import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { SharedModule } from '../../@shared/shared.module';

@NgModule({
  imports: [
    ThemeModule,
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
