import {NgModule} from '@angular/core';

import {FormRoutingModule} from "./form-routing.module";

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {SharedModule} from "@share/share.module";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {FormComponent} from "./form.component";


@NgModule({
    imports: [
        FormRoutingModule,
        SharedModule,
        MatCheckboxModule,
        MatDatepickerModule,
    ],
    declarations: [
        FormComponent,
        CheckboxComponent,
    ],
    exports: [

    ]
})
export class FormModule {
}
