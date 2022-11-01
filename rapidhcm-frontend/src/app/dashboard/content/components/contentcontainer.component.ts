import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { ChildrenOutletContexts, Router } from "@angular/router";

@Component({
    selector: 'system-dashboard-content',
    templateUrl: '../templates/contentcontainer.html',
    animations: [
        trigger('routeAnimations', [
            state('showRoute', style({
                height: '8rem',
              })),
              state('showModule', style({
                height: '5rem',
                overflow: 'hidden'
              })),
              transition('showRoute => showModule', [
                group([
                  query('@*', animateChild()),
                  animate('.3s ease')
                ])
              ]),
              transition('showModule => showRoute', [
                group([
                  query('@*', animateChild()),
                  animate('.3s ease')
                ])
              ])
      ]),
      trigger('sliderAnimations', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('.3s ease', style({ opacity: 1 }))
        ])
      ]),
      trigger('moduleAnimations', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('.3s ease', style({ opacity: 1 }))
        ])
      ]),
    ]
})
export class ContentContainerComponent {
    constructor(
        private contexts: ChildrenOutletContexts,
        public router: Router
    ) {}

    public getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}