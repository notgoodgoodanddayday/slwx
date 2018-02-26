import {NgModule} from '@angular/core';

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {LayoutRoutingModule, Components} from "./layout-routing.module";


@NgModule({
    imports: [
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
