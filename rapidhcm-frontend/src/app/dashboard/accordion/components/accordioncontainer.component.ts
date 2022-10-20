import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAlignJustify, faBell, faCalendarDay, faCogs, faComments, faHamburger, faHome, faInbox, faMapMarkedAlt, faMessage, faUserFriends } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-accordion-container',
    templateUrl: '../templates/accordioncontainer.html'
})
export class SystemAccordionContainerComponent {
    constructor() {}

    public faAlignJustify: IconDefinition = faAlignJustify;
    public faBell: IconDefinition = faBell;
    public faComments: IconDefinition = faComments;
    public faCalendarDay: IconDefinition = faCalendarDay;
    public faCogs: IconDefinition = faCogs;
    public faUserFriends: IconDefinition = faUserFriends;
    public faInbox: IconDefinition = faInbox;
    public faHome: IconDefinition = faHome;
    public faMapMarkedAlt: IconDefinition = faMapMarkedAlt;

    public isActive: boolean = false;

}