import { Component, Input } from "@angular/core";

@Component({
    selector: 'system-accordion-subitem',
    templateUrl: '../templates/accordionsubitem.html'
})
export class AccordionSubItemComponent {
    @Input() subItemText: string = '';

    constructor() {}
}