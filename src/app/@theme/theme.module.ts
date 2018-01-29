import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { NbThemeModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  ThemeSwitcherComponent
} from './components';

import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
} from './layouts';

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';

const MODULES = [NbThemeModule, NbSidebarModule, NbMenuModule];

const COMPONENTS = [
  ThemeSwitcherComponent,
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default'
    },
    [DEFAULT_THEME, COSMIC_THEME]
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers
];

@NgModule({
  imports: [SharedModule, ...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  declarations: [...COMPONENTS]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS]
    };
  }
}
