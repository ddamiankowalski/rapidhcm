import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'system-button',
    templateUrl: '../templates/button.html'
})
export class ButtonComponent {
    constructor() {}

    @Output() public click: EventEmitter<any> = new EventEmitter();
}