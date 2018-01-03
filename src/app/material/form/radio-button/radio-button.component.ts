import {Component} from '@angular/core';

@Component({
    selector: 'app-radio-button',
    templateUrl: './radio-button.component.pug',
    styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
    favoriteSeason: string;

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];
}
