import { HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        })
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error.status == 401) {
                    console.log(error);
                }
                return throwError(() => new Error(error.message));
            })
        )
    }
}