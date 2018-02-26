import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: []
})
export class SharedModule {
}
