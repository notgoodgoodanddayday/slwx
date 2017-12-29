import {NgModule} from '@angular/core';
import {RedirectRoutingModule} from "./redirect-routing.module";
import {Error404Component} from './error-404/error-404.component';

@NgModule({
    imports: [
        RedirectRoutingModule,
    ],
    declarations: [
        Error404Component,
    ],
    exports: []
})
export class RedirectModule {
}
