import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";


@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.pug',
    styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {
    options: FormGroup;

    constructor(fb: FormBuilder) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.themingOptions = fb.group({
            'color': 'primary',
            'fontSize': [16, Validators.min(10)],
        });
    }

    //- Form field with error messages
    email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    }

    //- Form field with prefix & suffix
    hide = true;

    //- Form field theming
    themingOptions: FormGroup;
    getFontSize() {
        return Math.max(10, this.themingOptions.value.fontSize);
    }
}
