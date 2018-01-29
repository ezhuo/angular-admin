import { NgModule } from '@angular/core';
import { FormsRoutingModule, routedComponents } from './forms-routing.module';
import { SharedModule } from '../../@shared/shared.module';

@NgModule({
  imports: [
    FormsRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class FormsModule { }
