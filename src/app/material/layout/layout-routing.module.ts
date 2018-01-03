import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {ListComponent} from "./list/list.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'layout'}},
    {path: 'list', component: ListComponent, data: {title: 'list'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}

export const Components = [
    //- page
    IndexComponent,
    ListComponent,
    //- components
];