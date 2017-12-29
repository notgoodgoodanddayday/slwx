import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: '首页'},
    },
    /* 重定向页面 */
    {
        path: 'redirect',
        loadChildren: "./redirect/redirect.module#RedirectModule",
    },
    /* 页面不存在，重定向到404 */
    {
        path: '**',
        redirectTo: '/redirect/404',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
