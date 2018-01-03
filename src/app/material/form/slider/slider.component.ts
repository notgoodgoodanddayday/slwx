import {Component} from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.pug',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
    autoTicks = false;
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
    private _tickInterval = 1;

}
