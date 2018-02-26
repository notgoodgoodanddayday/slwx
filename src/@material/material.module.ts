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
    MatNativeDateModule, MatGridListModule, MatTabsModule, MatStepperModule, MatButtonToggleModule, MatChipsModule,
    MatProgressBarModule, MatDialogModule, MatSnackBarModule, MatTooltipModule, MatPaginatorModule, MatSortModule,
    MatTableModule,
} from '@angular/material';


@NgModule({
    exports: [
        //- form controls
        MatFormFieldModule,
        MatInputModule,
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
        MatStepperModule,
        //- button-indicators
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatProgressBarModule,
        //- popups-modules
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        //- icon
        MatIconModule,
        //- data-table
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
    ]
})
export class MaterialModule {
}
