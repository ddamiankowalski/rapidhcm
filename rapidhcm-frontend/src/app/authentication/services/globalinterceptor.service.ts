import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AlertService } from "src/app/global/services/alert.service";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthenticationService,
        public router: Router,
        public alert: AlertService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        })
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                this.showErrorMessage(error);
                if(error.status == 401) {
                    this.auth.clearSession();
                    this.router.navigate(['auth']);
                }
                return throwError(() => new Error(error.message));
            })
        )
    }

    public showErrorMessage(errorObject: HttpErrorResponse) {
        console.log(errorObject);
        // delete in prod

        this.alert.createAlert('ERROR ' + errorObject.error.statusCode, errorObject.error.message, 'error', true);
    }
}