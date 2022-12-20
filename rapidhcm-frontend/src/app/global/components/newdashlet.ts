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

    public isModalToggled: boolean = false;

    public createDashlet(): void {
        this.isModalToggled = !this.isModalToggled;
    }
}