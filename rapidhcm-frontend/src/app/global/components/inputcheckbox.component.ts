import { Component, Input } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: 'system-input-checkbox',
    templateUrl: '../templates/inputcheckbox.html'
})
export class InputCheckboxComponent {
    /**
     * Icon input 
     */
    @Input() public icon!: IconProp;

    constructor() {}
}