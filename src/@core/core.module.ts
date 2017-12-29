import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AlertService} from "./service/alert.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        AlertService,
    ]
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
