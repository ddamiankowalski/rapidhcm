import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: 'system-time-tracker-task',
    templateUrl: '../templates/timetrackertask.html'
})
export class TimeTrackerTaskComponent {
    @Input() public icon!: IconDefinition;
    @Input() public taskName: string = '';
    @Input() public color: string = '';

    constructor() {}
}