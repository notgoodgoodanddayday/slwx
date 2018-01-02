import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormComponent} from "./form.component";

import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ButtonComponent} from "./button/button.component";
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {AutocompleteObjComponent} from "./autocomplete/autocomplete-obj/autocomplete-obj.component";
import {CheckboxExampleComponent} from "./checkbox/checkbox-example/checkbox-example.component";
import {InputComponent} from "./input/input.component";
import {FormFieldComponent} from "./form-field/form-field.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: FormComponent, data: {title: 'form'}},
    {path: 'checkbox', component: CheckboxComponent, data: {title: 'checkbox'}},
    {path: 'button', component: ButtonComponent, data: {title: 'button'}},
    {path: 'autocomplete', component: AutocompleteComponent, data: {title: 'autocomplete'}},
    {path: 'input', component: InputComponent, data: {title: 'input'}},
    {path: 'form-field', component: FormFieldComponent, data: {title: 'form-field'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}

export const Components = [
    //- page
    CheckboxComponent,
    ButtonComponent,
    AutocompleteComponent,
    InputComponent,
    FormFieldComponent,
    //- components
    AutocompleteObjComponent,
    CheckboxExampleComponent,
];