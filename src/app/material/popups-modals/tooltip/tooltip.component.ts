import {Component} from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.pug',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
    position = 'before';
}
