import { AfterViewInit, Component, ComponentRef, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'alert-component',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent implements AfterViewInit {
    constructor (
        public alert: AlertService,
    ) {}

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;
    @Input() public alertMessageType?: string;
    @Input() public self!: ComponentRef<AlertComponent>;

    ngAfterViewInit(): void {
        this.alertContainer.style.animation = 'alertIn 0.5s';
        setTimeout(() => this.alertContainer.style.removeProperty('animation'), 500);
    }

    public close(): void {
        this.alert.clearAlert(this.self);
        this.alertContainer.style.animation = 'alertOut 0.3s';
        setTimeout(() => this.self.destroy(), 250);
    }

    public faTimes: IconDefinition = faTimes;

    get alertContainer(): HTMLElement {
        return this.self.location.nativeElement.querySelector('.std-alert') as HTMLElement;
    }

}