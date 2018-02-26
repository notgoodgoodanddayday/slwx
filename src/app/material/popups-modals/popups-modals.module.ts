import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {PopupsModalsRoutingModule, Components} from "./popups-modals-routing.module";
import {ExampleComponent} from "./dialog/example/example.component";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
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

export const entryConponents = [
    ExampleComponent,
];
