import {Component} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.pug',
    styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

    constructor(public snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action)
            .onAction()
            .subscribe(() =>{
                console.log("snack bar close");
            });
    }

}
