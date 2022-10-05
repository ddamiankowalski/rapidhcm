import { Injectable, ViewContainerRef } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor() {}

    public vcr: ViewContainerRef | undefined;
}