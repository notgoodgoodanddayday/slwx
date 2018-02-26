import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.pug',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

    color = 'primary';
    mode = 'determinate';
    value = 50;
    bufferValue = 75;

    ngOnInit() {
    }

}
