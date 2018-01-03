import {Component} from '@angular/core';

@Component({
    selector: 'app-slider-toggle',
    templateUrl: './slider-toggle.component.pug',
    styleUrls: ['./slider-toggle.component.scss']
})
export class SliderToggleComponent {
    color = 'accent';
    checked = false;
    disabled = false;
}
