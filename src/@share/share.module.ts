import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {RouterModule}        from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        RouterModule,
    ],
    providers: []
})
export class SharedModule {
}
