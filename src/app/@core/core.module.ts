import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {CommonModule} from '@angular/common';

import {throwIfAlreadyLoaded} from './module-import-guard';
import {DataModule} from './data/data.module';
import {UtilsModule} from './utils/utils.module';

import {SharedModule} from './../@shared/shared.module';

const CORE_PROVIDERS = [...DataModule.forRoot().providers, UtilsModule.forRoot().providers];

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [DataModule, UtilsModule],
  declarations: []
})
export class CoreModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS]
    };
  }
}
