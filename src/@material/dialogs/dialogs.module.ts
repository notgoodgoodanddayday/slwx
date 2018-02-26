import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";

import {ExampleComponent} from "./example/example.component";
import {SharedModule} from "../../@share/share.module";


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MaterialModule,
    ],
    declarations: [
        ExampleComponent,
    ]
})
export class DialogsModule {
}

export const DialogEntryComponents = [
    ExampleComponent,
];