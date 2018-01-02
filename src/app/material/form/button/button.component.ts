import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.pug',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('button component onInit');
    }

}
