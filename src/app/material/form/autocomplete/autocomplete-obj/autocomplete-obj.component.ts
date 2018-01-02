import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {startWith} from "rxjs/operators/startWith";
import {map} from "rxjs/operators/map";

export class User {
    constructor(public name: string) { }
}

@Component({
    selector: 'mat-autocomplete-obj',
    templateUrl: './autocomplete-obj.component.pug',
    styleUrls: ['./autocomplete-obj.component.scss']
})
export class AutocompleteObjComponent implements OnInit {

    myControl = new FormControl();

    options = [
        new User('Mary'),
        new User('Shelley'),
        new User('Igor')
    ];

    filteredOptions: Observable<User[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith({} as User),
                map(user => user && typeof user === 'object' ? user.name : ""),
                map(name => name ? this.filter(name) : this.options.slice())
            );
    }

    filter(name: string): User[] {
        return this.options.filter(option =>
        option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    //- 选择后，展示在input上的值
    displayFn(user: User) {
        return user ? user.name : "";
    }

}
