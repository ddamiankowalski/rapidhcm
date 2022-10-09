import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-avatar',
    templateUrl: '../templates/avatar.html'
})
export class AvatarComponent {
    constructor() {}

    public faQuestion: IconDefinition = faQuestion;
}