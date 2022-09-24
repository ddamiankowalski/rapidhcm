import {
    trigger,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
    transition
} from '@angular/animations';

export const fader = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'
                }),
            ]),
        ]),
    ])
