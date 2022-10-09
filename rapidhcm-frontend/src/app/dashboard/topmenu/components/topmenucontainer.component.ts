import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBell, faDoorOpen, faMessage } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'dashboard-top-menu-container',
    templateUrl: '../templates/topmenucontainer.html'
})
export class TopMenuContainerComponent {
    constructor() {}

    public faMessage: IconDefinition = faMessage;
    public faBell: IconDefinition = faBell;
    public faDoorOpen: IconDefinition = faDoorOpen;


}