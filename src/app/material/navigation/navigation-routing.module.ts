import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {MenuComponent} from "./menu/menu.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {SidenavOpenCloseExampleComponent} from "./sidenav/sidenav-open-close-example/sidenav-open-close-example.component";
import {SidenavModeExampleComponent} from "./sidenav/sidenav-mode-example/sidenav-mode-example.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, data: {title: 'navigation'}},
    {path: 'menu', component: MenuComponent, data: {title: 'menu'}},
    {path: 'sidenav', component: SidenavComponent, data: {title: 'sidenav'}},
    {path: 'sidenav-open-close-example', component: SidenavOpenCloseExampleComponent, data: {title: 'sidenav-open-close-example'}},
    {path: 'sidenav-mode-example', component: SidenavModeExampleComponent, data: {title: 'sidenav-mode-example'}},
    {path: 'toolbar', component: ToolbarComponent, data: {title: 'toolbar'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavigationRoutingModule {
}

export const Components = [
    //- page
    IndexComponent,
    MenuComponent,
    SidenavComponent,
    SidenavOpenCloseExampleComponent,
    SidenavModeExampleComponent,
    ToolbarComponent,
    //- components
];