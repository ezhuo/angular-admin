import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const Modules = [
    CommonModule, NgbModule
]
@NgModule({
    imports: Modules,
    exports: [...Modules, FormsModule, HttpClientModule],
    declarations: []
})
export class SharedModule { }
