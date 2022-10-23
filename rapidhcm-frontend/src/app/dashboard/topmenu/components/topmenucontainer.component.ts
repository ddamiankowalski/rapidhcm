import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
import { faAnchorLock, faBell, faCalendarAlt, faCogs, faDoorOpen, faHaykal, faInfoCircle, faMessage, faSackXmark, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'dashboard-top-menu-container',
    templateUrl: '../templates/topmenucontainer.html'
})
export class TopMenuContainerComponent {
    constructor() {}

    public faMessage: IconDefinition = faMessage;
    public faBell: IconDefinition = faBell;
    public faDoorOpen: IconDefinition = faDoorOpen;
    public faCogs: IconDefinition = faCogs;
    public faSearch: IconDefinition = faSearch;
    public faAnchorLock: IconDefinition = faAnchorLock;
    public faAnchorLock2: IconDefinition = faSackXmark;
    public faAnchorLock3: IconDefinition = faHaykal;
    public faAnchorLock4: IconDefinition = faMagento;
    public faCalendarAlt: IconDefinition = faCalendarAlt;
    public faUserCircle: IconDefinition = faUserCircle;
    public faInfoCircle: IconDefinition = faInfoCircle;

}