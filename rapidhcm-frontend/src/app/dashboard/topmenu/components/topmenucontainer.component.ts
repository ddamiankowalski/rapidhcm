import { Component, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMagento } from "@fortawesome/free-brands-svg-icons";
import { faAnchorLock, faBell, faCalendarAlt, faCogs, faDoorOpen, faHaykal, faInfoCircle, faMessage, faSackXmark, faSearch, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";

@Component({
    selector: 'dashboard-top-menu-container',
    templateUrl: '../templates/topmenucontainer.html'
})
export class TopMenuContainerComponent {
    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.key === "Escape") this.cancelSearchInput();
    }
    
    constructor(
        public auth: AuthenticationService,
        public router: Router
    ) {}

    /**
     * A getter for the username that gets set when
     * user is being logged in
     */
    public getUsername() {
        return this.auth.username;
    }

    public searchInput: string = '';

    public cancelSearchInput() {
        this.searchInput = '';
    }

    public logout() {
        this.auth.clearSession();
        this.router.navigate(['/auth']);
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