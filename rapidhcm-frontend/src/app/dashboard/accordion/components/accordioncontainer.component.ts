import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAlignJustify, faBell, faCalendarDay, faCogs, faComments, faHamburger, faHome, faInbox, faMapMarkedAlt, faMessage, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { AccordionService } from "../../services/accordion.service";

@Component({
    selector: 'system-accordion-container',
    templateUrl: '../templates/accordioncontainer.html'
})
export class SystemAccordionContainerComponent implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild('wrapper') wrapper!: ElementRef;

    constructor(
        public accordion: AccordionService
    ) {}

    public subscriptions: Subscription = new Subscription();

    /**
     * boolean indicating whether accordion is on or not
     */
    public isAccordionToggled: boolean = true;

    /**
     * HTML Accordion native element
     */
    public accordionNativeElement: HTMLElement | undefined;

    /**
     * A function that toggles accordion
     * @param $event click event
     */
    public toggleAccordion($event?: any): void {
        this.isAccordionToggled = !this.isAccordionToggled;
        this.accordion.accordionToggle$.next(this.isAccordionToggled);
        this.updateClass();
    }

    ngAfterViewInit(): void {
        this.accordionNativeElement = this.wrapper.nativeElement;
        this.updateClass();
    }

    public ngOnInit(): void {
        this.subscriptions.add(this.accordion.accordionItemClicked$.subscribe(click => {
            if(this.isAccordionToggled) this.toggleAccordion();
        }));
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    /**
     * Update accordion class depending on 
     * the current isAccordionToggled value
     */
    public updateClass() {
        this.isAccordionToggled ? 
            this.accordionNativeElement?.classList.add('active') :
            this.accordionNativeElement?.classList.remove('active')
    }

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