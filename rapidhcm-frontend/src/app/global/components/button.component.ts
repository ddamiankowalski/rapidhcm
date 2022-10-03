import { Component, EventEmitter, Input, Output } from "@angular/core";
import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-button',
    templateUrl: '../templates/button.html'
})
export class ButtonComponent {
    constructor() {}

    @Output() public click: EventEmitter<any> = new EventEmitter();

    @Input() public text?: string;

    @Input() public loading: boolean = false;

    public faSpinner: IconDefinition = faSpinner;
}