import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-new-dashlet',
    templateUrl: '../templates/newdashlet.html'
})
export class NewDashletComponent {
    constructor() {}

    public plusIcon: IconDefinition = faPlusCircle;

    public createDashlet(): void {
        console.log('add a new dashlet')
    }
}