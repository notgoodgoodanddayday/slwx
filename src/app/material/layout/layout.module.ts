import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {LayoutRoutingModule, Components} from "./layout-routing.module";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
        LayoutRoutingModule,
    ],
    declarations: [
        Components,
    ],
    exports: [
    ]
})
export class LayoutModule {
}
