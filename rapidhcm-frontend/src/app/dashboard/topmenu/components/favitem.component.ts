import { Component, Input } from "@angular/core";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: 'system-fav-item',
    templateUrl: '../templates/favitem.html'
})
export class FavItemComponent {
    constructor() {}

    @Input() public icon!: IconProp;
}