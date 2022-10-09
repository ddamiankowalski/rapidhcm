import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    constructor(
    ) {}

    /**
     * backend url that is used to make requests
     * to the backend
     */
    public backendUrl: string | undefined = 'http://localhost:3000/api/';

    /**
     * A generic isconfigured fflag that
     * is a behaviour subject and tells
     * the application whether it has 
     * been fully initialized and configured
     */
    public isConfigured$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public clearConfiguration() {
        this.isConfigured$.next(false);
        //TODO add more stuff that should delete configuration
    }
}