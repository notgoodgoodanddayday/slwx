import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule, LOCALE_ID} from '@angular/core';

import {CoreModule} from "@core/core.module";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: navigator.language },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
