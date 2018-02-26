import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ExampleComponent} from "./example/example.component";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.pug',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    animal: string;
    name: string;

    @ViewChild(ExampleComponent) example;

    constructor(private dialog: MatDialog){
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ExampleComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
            console.log(result);
        });
    }
}