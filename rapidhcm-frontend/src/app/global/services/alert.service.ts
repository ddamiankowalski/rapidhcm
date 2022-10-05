import { Injectable, ViewContainerRef } from "@angular/core";
import { AlertComponent } from "../components/alert.component";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor() {}

    public vcr: ViewContainerRef | undefined;

    public createAlert() {
        console.log(this.vcr);
        this.vcr?.createComponent(AlertComponent)
    }
}