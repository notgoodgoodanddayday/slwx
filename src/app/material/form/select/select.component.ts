import {Component} from '@angular/core';
import {Validators, FormControl} from "@angular/forms";

@Component({
    selector: 'app-select',
    templateUrl: './select.component.pug',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    selected = 'option2';

    //- Select with form field features
    animalControl = new FormControl('', [Validators.required]);
    animals = [
        {name: 'Dog', sound: 'Woof!'},
        {name: 'Cat', sound: 'Meow!'},
        {name: 'Cow', sound: 'Moo!'},
        {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

    //- title Select with multiple selection
    toppings = new FormControl();
    toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

    //- Select with custom panel styling
    panelColor = new FormControl('red');

}
