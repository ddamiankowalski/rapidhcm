import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: 'system-time-tracker',
    templateUrl: '../templates/timetracker.html'
})
export class TimeTrackerComponent {
    @Input() public icon!: IconDefinition;
    @Input() public taskName: string = '';

    constructor() {}
}