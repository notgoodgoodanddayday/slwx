import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {ButtonsIndicatorsRoutingModule, Components} from "./buttons-indicators-routing.module";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
        ButtonsIndicatorsRoutingModule,
    ],
    declarations: [
        Components,
    ],
    exports: [
    ]
})
export class ButtonsIndicatorsModule {
}
