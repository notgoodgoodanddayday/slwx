import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponent} from "./material.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: MaterialComponent, data: {title: 'material-angular-ui'}},
    {path: 'form', loadChildren: "./form/form.module#FormModule"},
    {path: 'buttons-indicators', loadChildren: "./buttons-indicators/buttons-indicators.module#ButtonsIndicatorsModule"},
    {path: 'navigation', loadChildren: "./navigation/navigation.module#NavigationModule"},
    {path: 'layout', loadChildren: "./layout/layout.module#LayoutModule"},
    {path: 'popups-modals', loadChildren: "./popups-modals/popups-modals.module#PopupsModalsModule"},
    {path: 'data-table', loadChildren: "./data-table/data-table.module#DataTableModule"},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MaterialRoutingModule {
}