import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
    NbActionsModule,
    NbCardModule,
    NbLayoutModule,
    NbRouteTabsetModule,
    NbSearchModule,
    NbTabsetModule,
    NbUserModule,
    NbCheckboxModule
} from '@nebular/theme';

import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from '../@theme/pipes';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule];

const MODULES = [
    NbCardModule,
    NbLayoutModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbCheckboxModule,
    NgbModule
];

const PIPES = [CapitalizePipe, PluralPipe, RoundPipe, TimingPipe];

@NgModule({
    imports: [...BASE_MODULES, ...MODULES],
    exports: [...BASE_MODULES, ...MODULES, ...PIPES],
    declarations: [...PIPES]
})
export class SharedModule {
}