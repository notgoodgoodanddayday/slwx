import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {NavigationRoutingModule, Components} from "./navigation-routing.module";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
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
