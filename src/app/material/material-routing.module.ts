import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponent} from "./material.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: MaterialComponent, data: {title: 'material-angular-ui'}},
    {path: 'form', loadChildren: "./form/form.module#FormModule"},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MaterialRoutingModule {
}