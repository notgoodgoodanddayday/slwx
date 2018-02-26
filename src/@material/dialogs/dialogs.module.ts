import {NgModule} from '@angular/core';
import {MaterialModule} from "../material.module";

import {ExampleComponent} from "./example/example.component";


@NgModule({
    imports: [
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