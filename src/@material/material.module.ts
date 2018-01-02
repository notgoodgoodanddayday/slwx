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
    MatSelectModule, MatIconModule,
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
        //- layout
        MatCardModule,
        //- icon
        MatIconModule,
    ]
})
export class MaterialModule {
}
