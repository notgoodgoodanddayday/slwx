import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {DialogComponent} from "./dialog/dialog.component";
import {SnackBarComponent} from "./snack-bar/snack-bar.component";
import {TooltipComponent} from "./tooltip/tooltip.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'form'}},
    {path: 'dialog', component: DialogComponent, data: {title: 'dialog'}},
    {path: 'snack-bar', component: SnackBarComponent, data: {title: 'snack-bar'}},
    {path: 'tooltip', component: TooltipComponent, data: {title: 'tooltip'}},
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
    SnackBarComponent,
    TooltipComponent,
    //- components
];