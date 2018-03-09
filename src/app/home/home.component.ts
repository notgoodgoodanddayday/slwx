import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.pug',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    menus = [
        {url: '/material', title: 'material', backgroundColor: 'lightblue'},
        {url: '/material', title: '日记', backgroundColor: 'lightblue'},
        {url: '/material', title: '万象', backgroundColor: 'lightblue'},
    ];

    constructor() {
    }

    ngOnInit() {


    }

}
