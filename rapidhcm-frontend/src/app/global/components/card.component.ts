import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

@Component({
    selector: 'system-card',
    templateUrl: '../templates/card.html'
})
export class CardComponent {
    @Input() public sidePicture: string | undefined;
    @Input() public showReadMore: boolean = false;
    @Input() public bg: string | undefined = '1';

    public faHeart: IconDefinition = faHeart;

    constructor() {
        
    }
}