import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {ListComponent} from "./list/list.component";
import {CardComponent} from "./card/card.component";
import {DividerComponent} from "./divider/divider.component";
import {ExpansionPanelComponent} from "./expansion-panel/expansion-panel.component";
import {GridListComponent} from "./grid-list/grid-list.component";
import {TabsComponent} from "./tabs/tabs.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'layout'}},
    {path: 'list', component: ListComponent, data: {title: 'list'}},
    {path: 'card', component: CardComponent, data: {title: 'card'}},
    {path: 'divider', component: DividerComponent, data: {title: 'divider'}},
    {path: 'expansion-panel', component: ExpansionPanelComponent, data: {title: 'expansion-panel'}},
    {path: 'grid-list', component: GridListComponent, data: {title: 'grid-list'}},
    {path: 'tabs', component: TabsComponent, data: {title: 'tabs'}},
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
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    TabsComponent,
    //- components
];