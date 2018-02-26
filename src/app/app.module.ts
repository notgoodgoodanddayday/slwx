import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';

import {CoreModule} from "@core/core.module";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {DialogsModule, DialogEntryComponents} from "../@material/dialogs/dialogs.module";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        DialogsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
        //- Missing locale data for the locale "zh-CN"
        // { provide: LOCALE_ID, useValue: navigator.language },
    ],
    entryComponents: [
        DialogEntryComponents,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
