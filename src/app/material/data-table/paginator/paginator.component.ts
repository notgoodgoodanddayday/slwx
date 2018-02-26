import {Component} from '@angular/core';
import {PageEvent} from "@angular/material";

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.pug',
    styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

    // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];

    // MatPaginator Output
    pageEvent: PageEvent;

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }

}
