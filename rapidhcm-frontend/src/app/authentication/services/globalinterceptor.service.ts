import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    constructor(
        public auth: AuthenticationService,
        public router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        })
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error)
                if(error.status == 401) {
                    this.auth.clearSession();
                    this.router.navigate(['auth']);
                }
                return throwError(() => new Error(error.message));
            })
        )
    }
}