import { Component, HostListener } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
import { faAnchorLock, faBell, faCalendarAlt, faCogs, faDoorOpen, faHaykal, faInfoCircle, faMessage, faSackXmark, faSearch, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'dashboard-top-menu-container',
    templateUrl: '../templates/topmenucontainer.html'
})
export class TopMenuContainerComponent {
    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.key === "Escape") this.cancelSearchInput();
    }
    
    constructor() {}

    public searchInput: string = '';

    public cancelSearchInput() {
        this.searchInput = '';
    }

    get canCancelInput(): boolean {
        return this.searchInput?.length !== 0;
    }

    public faTimes: IconDefinition = faTimes;
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