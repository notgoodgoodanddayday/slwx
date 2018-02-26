import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";


@Component({
    selector: 'dialog-example',
    templateUrl: 'example.component.pug',
})
export class ExampleComponent {

    constructor(
        public dialogRef: MatDialogRef<ExampleComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log(data);
    }

    close(): void {
        this.dialogRef.close();
    }

}
