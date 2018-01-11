import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToasterModule} from 'angular2-toaster';

import {NoticeService} from './notice.service';
import {ModalService} from './modal.service';
import {SweetAlertService} from './sweetalert2.service';
import {AnalyticsService} from './analytics.service';

const SERVICES = [
  NoticeService,
  ModalService,
  SweetAlertService,
  AnalyticsService
];

@NgModule({
  imports: [CommonModule, ToasterModule],
  exports: [ToasterModule],
  providers: [
    ...SERVICES
  ]
})
export class UtilsModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: UtilsModule,
      providers: [...SERVICES]
    };
  }
}
