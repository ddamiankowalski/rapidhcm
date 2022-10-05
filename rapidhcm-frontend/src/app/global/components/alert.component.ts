import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'alert-component',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent {
    constructor (
        public alert: AlertService,
    ) {}

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;

    public faTimes: IconDefinition = faTimes;
}