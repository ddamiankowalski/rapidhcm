import { Component, Input } from "@angular/core";

@Component({
    selector: 'system-slider-card',
    templateUrl: '../templates/slidercard.html'
})
export class SliderCard {
    constructor() {}

    @Input() public imagePath: string | undefined;

    @Input() public sliderTitle: string | undefined;

    @Input() public sliderSubTitle: string | undefined;

    @Input() public sliderDesc: string | undefined;

    @Input() public bg: string | undefined;
    

    public isActive: string | undefined;

    public toggleActive($event: any) {
        this.isActive = $event.type == 'mouseover' ? 'active' : '';
    }

    get image() {
        return this.imagePath + '.png';
    }
}