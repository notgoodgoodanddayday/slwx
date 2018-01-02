import {Component} from '@angular/core';

@Component({
    selector: 'matc-checkbox-example',
    templateUrl: './checkbox-example.component.pug',
    styleUrls: ['./checkbox-example.component.scss']
})
export class CheckboxExampleComponent {

    checked = false;
    indeterminate = false;
    align = 'start';
    disabled = false;

}
