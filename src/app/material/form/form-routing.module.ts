import {NgModule}     from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FormComponent} from "./form.component";

import {CheckboxComponent} from "./checkbox/checkbox.component";
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";
import {AutocompleteObjComponent} from "./autocomplete/autocomplete-obj/autocomplete-obj.component";
import {CheckboxExampleComponent} from "./checkbox/checkbox-example/checkbox-example.component";
import {InputComponent} from "./input/input.component";
import {FormFieldComponent} from "./form-field/form-field.component";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {SelectComponent} from "./select/select.component";
import {SliderComponent} from "./slider/slider.component";
import {SliderToggleComponent} from "./slider-toggle/slider-toggle.component";


const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: FormComponent, data: {title: 'form'}},
    {path: 'checkbox', component: CheckboxComponent, data: {title: 'checkbox'}},
    {path: 'autocomplete', component: AutocompleteComponent, data: {title: 'autocomplete'}},
    {path: 'input', component: InputComponent, data: {title: 'input'}},
    {path: 'form-field', component: FormFieldComponent, data: {title: 'form-field'}},
    {path: 'radio-button', component: RadioButtonComponent, data: {title: 'radio-button'}},
    {path: 'select', component: SelectComponent, data: {title: 'select'}},
    {path: 'slider', component: SliderComponent, data: {title: 'slider'}},
    {path: 'slider-toggle', component: SliderToggleComponent, data: {title: 'slider-toggle'}},
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
    AutocompleteComponent,
    InputComponent,
    FormFieldComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SliderToggleComponent,
    //- components
    AutocompleteObjComponent,
    CheckboxExampleComponent,
];