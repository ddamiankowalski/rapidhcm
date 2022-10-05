import { ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { AlertComponent } from "../components/alert.component";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor() {}

    /**
     * a vcr for the outler
     */
    public vcr: ViewContainerRef | undefined;

    /**
     * an array for the alerts
     */
    public alertsArray: Array<ComponentRef<AlertComponent> | undefined> = [];

    /**
     * a function that creates an alert and sets inputs for the 
     * alert component
     * @param header the header message
     * @param description the description message
     * @param messageType the type of the message
     */
    public createAlert(header: string = '', description: string = '', messageType: 'error' | 'success' = 'error') {
        const alert = this.vcr?.createComponent(AlertComponent);
        this.alertsArray.push(alert);
        
        alert?.setInput('alertHeader', header);
        alert?.setInput('alertDescription', description);
        alert?.setInput('alertMessageType', messageType);
        alert?.setInput('self', alert);
    }
}