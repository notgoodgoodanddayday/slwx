import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormComponent} from "./form.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: FormComponent, data: {title: 'form'}},
    {path: 'checkbox', component: CheckboxComponent, data: {title: 'checkbox'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FormRoutingModule {
}