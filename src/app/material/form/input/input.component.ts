import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        console.log(control.invalid);
        const isSubmitted = form && form.submitted;
        // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        return !!(control && control.invalid);
    }
}

@Component({
    selector: 'app-input',
    templateUrl: './input.component.pug',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    emailFormCtrl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    //- 自定义验证
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);
    matcher = new MyErrorStateMatcher();

    constructor() {
    }

    ngOnInit() {
        console.log('button component onInit');
    }


//    @NgModule({
//      providers: [
//        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
//      ]
//    })

}
