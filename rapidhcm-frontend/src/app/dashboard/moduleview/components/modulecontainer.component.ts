import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'module-container',
    templateUrl: '../templates/modulecontainer.html'
})
export class ModuleContainerComponent {
    constructor() {}

    public header: string | undefined = 'New Candidate';
    public subHeader: string | undefined = 'Create a new candidate by filling out the form below';
    public faUserFriends: IconDefinition = faUserFriends;
}