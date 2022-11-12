import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";
import { AccordionService } from "../../services/accordion.service";
import { BackendService } from "../../services/backend.service";
import { ConfigurationService } from "../../services/configuration.service";

@Component({
    selector: 'dashboard',
    templateUrl: '../templates/dashboard.html',
    animations: [
        trigger('routeAnimations', [
              transition('* <=> *', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        padding: '1.5rem',
                        opacity: 0
                    }),
                  ]),
                  query(':enter', [
                    animate('600ms ease', style({ opacity: 1 })),
                  ])
              ])
        ])
    ]
})
export class DashboardComponent implements OnInit, OnDestroy {
    constructor(
        public http: HttpClient,
        public configuration: ConfigurationService,
        public backend: BackendService,
        public accordion: AccordionService,
        public cdRef: ChangeDetectorRef,
        private contexts: ChildrenOutletContexts
    ) {}

    ngOnInit(): void {
        this.configuration.loadConfiguration();
    }

    ngOnDestroy(): void {
    }

    public getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}