import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {DialogComponent} from "./dialog/dialog.component";
import {ExampleComponent} from "./dialog/example/example.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'form'}},
    {path: 'dialog', component: DialogComponent, data: {title: 'dialog'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PopupsModalsRoutingModule {
}

export const Components = [
    //- page
    IndexComponent,
    DialogComponent,
    //- components
    ExampleComponent,
];