import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Subscription } from "rxjs";
import { AccordionService } from "../../services/accordion.service";

@Component({
    selector: 'system-accordion-item',
    templateUrl: '../templates/accordionitem.html'
})
export class AccordionItemComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('container') container!: ElementRef;
    @ViewChild('containerSub') containerSub!: ElementRef;

    @Input() icon!: IconDefinition;
    @Input() itemText: string = '';
    @Input() isActive: boolean = false;

    public subscriptions: Subscription = new Subscription();

    public containerHeight: number | undefined; 

    public toggleActive(): void {
        this.accordion.changeTab(this.itemText);
        this.isActive = true;
        this.renderer.setStyle(this.container.nativeElement, 'height', this.containerSub.nativeElement.offsetHeight + "px");
    }

    public isAccordionToggled: boolean = true;

    constructor(
        public accordion: AccordionService,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.subscriptions.add(this.accordion.accordionItemClicked$.subscribe(menuClicked => {
            this.isActive = false;
            this.renderer.setStyle(this.container.nativeElement, 'height', 0 + "px");
        }));

        this.subscriptions.add(this.accordion.accordionToggle$.subscribe(isToggled => {
            if(isToggled) {
                this.renderer.setStyle(this.container.nativeElement, 'height', 0 + "px");
            }
            this.isAccordionToggled = isToggled
        }))
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    ngAfterViewInit(): void {
    }
}