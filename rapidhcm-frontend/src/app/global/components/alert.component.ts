import { AfterViewInit, Component, ComponentRef, HostListener, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'alert-component',
    templateUrl: '../templates/alert.html'
})
export class AlertComponent implements AfterViewInit {
    @HostListener('mouseover', ['$event']) public hostHover() {
        if(this.closeTimeout !== undefined) {
            clearTimeout(this.closeTimeout);
        }
    }

    @HostListener('mouseout', ['$event']) public hostOut() {
        this.closeTimeout = setTimeout(() => this.close(), 2500)
    }

    constructor (
        public alert: AlertService,
    ) {}

    public closeTimeout: any | undefined;

    @Input() public alertHeader?: string;
    @Input() public alertDescription?: string;
    @Input() public alertMessageType?: string;
    @Input() public self!: ComponentRef<AlertComponent>;
    @Input() public autoclose: boolean = true;

    ngAfterViewInit(): void {
        this.alertContainer.style.animation = 'alertIn 0.5s';
        setTimeout(() => this.alertContainer.style.removeProperty('animation'), 500);
        if(this.autoclose) {
            this.closeTimeout = setTimeout(() => this.close(), 2500)
        }
    }

    public resetCloseTimeout() {
        if(this.closeTimeout !== undefined) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = setTimeout(() => this.close(), 2500)
        }
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