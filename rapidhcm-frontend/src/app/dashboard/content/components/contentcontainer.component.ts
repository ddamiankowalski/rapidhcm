import { animate, query, state, style, transition, trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";

@Component({
    selector: 'system-dashboard-content',
    templateUrl: '../templates/contentcontainer.html',
    animations: [
        trigger('routeAnimations', [
            state('showRoute', style({
                height: '*',
                opacity: '1'
              })),
              state('showModule', style({
                height: '0rem',
                overflow: 'hidden',
                opacity: '0',
                backgroundColor: 'none'
              })),
              transition('* <=> *', [
                animate('.3s ease')
              ])
      ])
    ]
})
export class ContentContainerComponent {
    constructor(
        private contexts: ChildrenOutletContexts
    ) {}

    public getRouteAnimationData() {
        console.log(this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'])
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}