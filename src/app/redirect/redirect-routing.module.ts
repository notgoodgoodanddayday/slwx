import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from "./error-404/error-404.component";


const routes: Routes = [
    {path: '', redirectTo: '404', pathMatch: 'full'},
    {path: '404', component: Error404Component, data: {title: '404'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RedirectRoutingModule {
}