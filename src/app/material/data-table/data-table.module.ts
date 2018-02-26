import {NgModule} from '@angular/core';
import {SharedModule} from "@share/share.module";
import {MaterialModule} from "@material/material.module";
import {DataTableRoutingModule, Components} from "./data-table-routing.module";
import { TableComponent } from './table/table.component';


@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        DataTableRoutingModule,
    ],
    declarations: [
        Components,
        TableComponent,
    ],
    exports: [
    ]
})
export class DataTableModule {
}
