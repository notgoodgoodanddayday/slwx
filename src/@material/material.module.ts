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
    MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatExpansionModule, MatDatepickerModule,
    MatNativeDateModule, MatGridListModule, MatTabsModule,
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
        MatDatepickerModule,
        MatNativeDateModule,
        //- navigation
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        //- layout
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatExpansionModule,
        MatTabsModule,
        //- icon
        MatIconModule,
    ]
})
export class MaterialModule {
}
