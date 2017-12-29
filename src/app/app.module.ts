import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from "@core/core.module";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
