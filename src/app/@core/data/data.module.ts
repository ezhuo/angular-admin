import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterModule } from 'angular2-toaster';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { SmartTableService } from './smart-table.service';
import { PlayerService } from './player.service';

import { AuthInterceptor } from './http.interceptor';
import { AuthService } from './auth.service';
import { NoticeService } from './notice.service';
import { HttpService } from './http.service';
import { ModalService } from './modal.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  SmartTableService,
  PlayerService,
  AuthService,
  NoticeService,
  HttpService,
  HttpService,
  ModalService
];

@NgModule({
  imports: [CommonModule, ToasterModule],
  exports: [ToasterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ...SERVICES
  ]
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [...SERVICES]
    };
  }
}
