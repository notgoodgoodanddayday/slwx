import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-chips',
    templateUrl: './chips.component.pug',
    styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('button component onInit');
    }

}
