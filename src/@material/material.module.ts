import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule,
} from '@angular/material';


@NgModule({
    exports: [
        //- form controls
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        //- navigation
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        //- layout
        MatListModule,
        MatCardModule,
        //- icon
        MatIconModule,
    ]
})
export class MaterialModule {
}
