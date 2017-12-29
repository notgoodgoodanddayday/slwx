import {NgModule} from '@angular/core';

import {MaterialRoutingModule} from "./material-routing.module";
import {MaterialComponent} from "./material.component";


@NgModule({
    imports: [
        MaterialRoutingModule,
    ],
    declarations: [
        MaterialComponent,
    ],
    exports: [

    ]
})
export class MaterialModule {
}
