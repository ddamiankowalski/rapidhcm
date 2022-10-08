import { Component, ComponentRef, Injectable, ViewContainerRef } from "@angular/core";
import { AlertComponent } from "../components/alert.component";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor() {}

    /**
     * shake animation running flag not to 
     * repeat it
     */
    public shakeAnimationRunning: boolean = false

    /**
     * a vcr for the outler
     */
    public vcr: ViewContainerRef | undefined;

    /**
     * an array for the alerts
     */
    public alertsArray: Array<ComponentRef<AlertComponent> | undefined> = [];

    /**
     * A function that clears a reference of an alert from
     * the array of alerts
     * @param alertRef a reference to an alert object
     */
    public clearAlert(alertRef: ComponentRef<AlertComponent>): void {
        this.alertsArray = this.alertsArray.filter(alert => alert !== alertRef);
    }

    /**
     * a function that creates an alert and sets inputs for the 
     * alert component
     * @param header the header message
     * @param description the description message
     * @param messageType the type of the message
     */
    public createAlert(header: string = '', description: string = '', messageType: 'error' | 'success' = 'error') {
        if(!this.checkForAlertsDuplicate(header, description)) return;

        const alert = this.vcr?.createComponent(AlertComponent);
        this.alertsArray.push(alert);
        
        alert?.setInput('alertHeader', header);
        alert?.setInput('alertDescription', description);
        alert?.setInput('alertMessageType', messageType);
        alert?.setInput('self', alert);
    }

    public checkForAlertsDuplicate(header: string, description: string): boolean {
        if(this.shakeAnimationRunning == true) return false;
        let result: boolean = true;
        this.alertsArray.forEach(alert => {
            if(alert?.instance.alertHeader == header || alert?.instance.alertDescription == description) {
                let alertContainer = this.getAlertContainer(alert);
                alertContainer.classList.add('alert-shake');
                if(this.shakeAnimationRunning == false) {
                    alertContainer.style.animationPlayState = 'running';
                    this.shakeAnimationRunning = true;
                    setTimeout(() => { alertContainer.style.animationPlayState = 'paused'; this.shakeAnimationRunning = false }, 1000);
                }

                result = false;
            }
        })
        return result;
    }

    public getAlertContainer(alert: ComponentRef<AlertComponent> | undefined): HTMLElement {
        return alert?.location.nativeElement.querySelector('.std-alert') as HTMLElement;
    }
}