import { Component, Input } from "@angular/core";

@Component({
    selector: 'system-slider-card',
    templateUrl: '../templates/slidercard.html'
})
export class SliderCard {
    constructor() {}

    @Input() public imagePath: string | undefined;

    get image() {
        return this.imagePath + '.png';
    }
}