import { AfterViewInit, Component, ViewChild, ViewContainerRef } from "@angular/core";
import { AlertService } from "src/app/global/services/alert.service";

@Component({
    selector: 'alert-outlet',
    templateUrl: '../templates/alertoutlet.html'
})
export class AlertOutlet implements AfterViewInit {
    @ViewChild('alertContainer', { read: ViewContainerRef, static: true }) alertContainer: ViewContainerRef | undefined;

    ngAfterViewInit(): void {
        this.alert.vcr = this.alertContainer;
        setTimeout(() => this.alert.createAlert('se'), 500)
    }

    constructor(
        public alert: AlertService
    ) {}
}