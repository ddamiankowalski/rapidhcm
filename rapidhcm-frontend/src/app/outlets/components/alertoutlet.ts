import { AfterViewInit, Component, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertService } from "src/app/global/services/alert.service";

@Component({
    selector: 'alert-outlet',
    templateUrl: '../templates/alertoutlet.html'
})
export class AlertOutlet implements AfterViewInit, OnDestroy {
    @ViewChild('alertContainer', { read: ViewContainerRef, static: true }) alertContainer: ViewContainerRef | undefined;

    public subscription: Subscription = new Subscription();

    ngAfterViewInit(): void {
        this.alert.vcr = this.alertContainer;

        this.subscription.add(this.router.events.subscribe(routeEvent => {
            if(routeEvent instanceof NavigationEnd && routeEvent.url.includes('dashboard')) {
                this.isDashboard = true;
            } else if(routeEvent instanceof NavigationEnd) {
                this.isDashboard = false;
            }
        }));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public isDashboard: boolean = false;

    constructor(
        public alert: AlertService,
        private router: Router
    ) {}
}