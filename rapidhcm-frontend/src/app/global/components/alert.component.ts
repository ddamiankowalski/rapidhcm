import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-alert',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent {
    constructor () {}

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;

    public faTimes: IconDefinition = faTimes;
}