import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ButtonComponent} from "./button/button.component";
import {IndexComponent} from "./index/index.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'form'}},
    {path: 'button', component: ButtonComponent, data: {title: 'button'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ButtonsIndicatorsRoutingModule {
}

export const Components = [
    //- page
    IndexComponent,
    ButtonComponent,
    //- components
];