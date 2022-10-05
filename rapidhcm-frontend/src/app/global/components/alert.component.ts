import { Component, Input, OnInit, ViewContainerRef } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'alert-outlet',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent implements OnInit {
    constructor (
        public alert: AlertService,
        public viewContainerRef: ViewContainerRef
    ) {
        this
    }

    ngOnInit(): void {
        this.alert.vcr = this.viewContainerRef;
        console.log(this.viewContainerRef)
    }

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;

    public faTimes: IconDefinition = faTimes;
}