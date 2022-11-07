import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { ConfigurationService } from "./configuration.service";

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(
        public configuration: ConfigurationService,
        public http: HttpClient,
        public auth: AuthenticationService,
        public router: Router
    ) {}

    public getRequest(path: string, paramsList: any | undefined = undefined): Observable<any> {
        let get$ = new Subject();

        const headers = this.getHeaders();
        const params = this.getParams(paramsList);

        this.http.get(this.backend + path, { headers: headers, params: params }).subscribe(
            {
                next: res => get$.next(res),
                error: err => console.log(err)
            }
        )

        return get$.asObservable();
    }

    public postRequest(path: string, body: any | undefined): Observable<any> {
        let post$ = new Subject();

        const headers = this.getHeaders();

        this.http.post(this.backend + path, body ?? {}, { headers: headers }).subscribe(
            {
                next: res => post$.next(res),
                error: err => console.log(err)
            }
        )

        return post$;
    }

    get backend(): string | undefined {
        return this.configuration.backendUrl;
    }

    public getHeaders(): HttpHeaders {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return headers;
    }

    public getParams(paramList: any): HttpParams {
        let params = new HttpParams({
            fromObject: paramList
        });
        return params;
    }

    /**
     * A method that loads a 
     * configuration for a given user
     */
    public loadConfiguration(): void {
        this.configuration.isConfigured$.next(false);
        
        const token = this.auth.getToken();
        const decodedToken = this.auth.getDecodedToken(token);
        
        if(!decodedToken) this.router.navigate(['/', 'auth']);
        this.getRequest('getuserinfo').subscribe(userInfo => this.handleUserInfo(userInfo))
    }

    public handleUserInfo(userInfo: any) {
        this.auth.setUserInfo(userInfo);
        this.configuration.isConfigured$.next(true);
    }
}