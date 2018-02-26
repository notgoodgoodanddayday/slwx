import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ExampleComponent} from "@material/dialogs/example/example.component";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.pug',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    lastname: string = "";
    name: string = "jerry";

    @ViewChild(ExampleComponent) example;

    constructor(private dialog: MatDialog){
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ExampleComponent, {
            width: '250px',
            data: { name: this.name, lastname: this.lastname }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.lastname = result;
        });
    }
}