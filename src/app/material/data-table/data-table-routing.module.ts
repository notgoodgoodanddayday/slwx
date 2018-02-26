import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {PaginatorComponent} from "./paginator/paginator.component";
import {SortHeaderComponent} from "./sort-header/sort-header.component";
import {TableComponent} from "./table/table.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'layout'}},
    {path: 'paginator', component: PaginatorComponent, data: {title: 'paginator'}},
    {path: 'sort-header', component: SortHeaderComponent, data: {title: 'sort-header'}},
    {path: 'table', component: TableComponent, data: {title: 'table'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataTableRoutingModule {
}

export const Components = [
    //- page
    IndexComponent,
    PaginatorComponent,
    SortHeaderComponent,
    TableComponent,
    //- components
];