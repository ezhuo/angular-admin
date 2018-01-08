import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ButtonsModule } from './buttons/buttons.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { ModalComponent } from './modals/modal/modal.component';
import { TypographyComponent } from './typography/typography.component';
import {
  TabsComponent,
  Tab1Component,
  Tab2Component
} from './tabs/tabs.component';
import { SearchComponent } from './search-fields/search-fields.component';
import { TestComponent } from './test/test.component';
import { dialogComponent } from './test/dialog/dialog.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  ModalsComponent,
  IconsComponent,
  ModalComponent,
  TypographyComponent,
  TabsComponent,
  Tab1Component,
  Tab2Component,
  SearchComponent,
  TestComponent,
  dialogComponent
];

@NgModule({
  imports: [ThemeModule, UiFeaturesRoutingModule, ButtonsModule],
  declarations: [...components],
  entryComponents: [ModalComponent,dialogComponent]
})
export class UiFeaturesModule {}
