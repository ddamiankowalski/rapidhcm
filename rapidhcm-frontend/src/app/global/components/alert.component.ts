import { Component, ComponentRef, Input, OnInit } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'alert-component',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent implements OnInit {
    constructor (
        public alert: AlertService,
    ) {}

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;
    @Input() public alertMessageType?: string;
    @Input() public self!: ComponentRef<AlertComponent>;

    ngOnInit(): void {
        setTimeout(() => this.close(), 3000)
    }

    public close(): void {
        this.self.destroy();
    }

    public faTimes: IconDefinition = faTimes;
}