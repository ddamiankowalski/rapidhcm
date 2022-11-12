import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, zip } from "rxjs";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { BackendService } from "./backend.service";
import { DashboardService } from "./dashboard.service";

@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    constructor(
        public auth: AuthenticationService,
        public router: Router,
        public backend: BackendService,
        public dashboard: DashboardService
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

    /**
     * A method that loads a 
     * configuration for a given user
     */
     public loadConfiguration(): void {
        this.isConfigured$.next(false);
        
        const token = this.auth.getToken();
        const decodedToken = this.auth.getDecodedToken(token);
        
        if(!decodedToken) this.router.navigate(['/', 'auth']);
        const userInfo$ = this.backend.getRequest('getuserinfo').subscribe(userInfo => this.handleUserInfo(userInfo))
        const dashlet$ = this.backend.getRequest('dashlet/configuration').subscribe(dashletInfo => this.handleDashletInfo(dashletInfo))
    }

    public clearConfiguration() {
        this.isConfigured$.next(false);
        //TODO add more stuff that should delete configuration
    }

    public handleDashletInfo(dashletInfo: any) {
        this.dashboard.setDashlets(dashletInfo);
        this.isConfigured$.next(true);
    }

    public handleUserInfo(userInfo: any) {
        this.auth.setUserInfo(userInfo);
    }
}