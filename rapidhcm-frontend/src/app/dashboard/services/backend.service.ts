import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { ConfigurationService } from "./configuration.service";
import { DashboardService } from "./dashboard.service";

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    constructor(
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
        return 'http://localhost:3000/api/';
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
}