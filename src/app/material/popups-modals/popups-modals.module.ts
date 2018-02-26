import {NgModule} from '@angular/core';

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {PopupsModalsRoutingModule, Components} from "./popups-modals-routing.module";


@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        PopupsModalsRoutingModule,
    ],
    declarations: [
        Components,
    ],
    exports: [
    ]
})
export class PopupsModalsModule {
}