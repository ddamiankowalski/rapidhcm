import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn: 'root'
})
export class GlobalCanLoad implements CanActivate, CanLoad {
    constructor(
        public router: Router,
        public auth: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const decodedToken = this.auth.isLoggedIn();
        return decodedToken == null ? true : this.router.createUrlTree(['/', 'dashboard']);
    }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // for now this is true, becuse we check the token if we go to auth. If we go to dashboard, there will be interceptors that will return to auth
        return true;
    }
}