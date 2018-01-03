import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-sidenav-mode-example',
    templateUrl: './sidenav-mode-example.component.pug',
    styleUrls: ['./sidenav-mode-example.component.scss']
})
export class SidenavModeExampleComponent {

    mode = new FormControl('over');

}
