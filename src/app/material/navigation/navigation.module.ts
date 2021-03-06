import {NgModule} from '@angular/core';

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {NavigationRoutingModule, Components} from "./navigation-routing.module";


@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        NavigationRoutingModule,
    ],
    declarations: [
        Components,
    ],
    exports: [
    ]
})
export class NavigationModule {
}
