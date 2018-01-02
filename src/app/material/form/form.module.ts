import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FormRoutingModule, Components} from "./form-routing.module";
import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";

import {FormComponent} from "./form.component";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        FormRoutingModule,
        SharedModule,
        MaterialModule,
    ],
    declarations: [
        FormComponent,
        Components,
    ],
    exports: [

    ]
})
export class FormModule {
}
