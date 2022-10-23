import { AfterViewInit, Directive, ElementRef, HostListener, Input } from "@angular/core";
import { UtilsService } from "../services/utils.service";

@Directive({
    selector: '[down-to-bottom]'
})
export class DownToBottomDirective implements AfterViewInit{
    @HostListener('window:resize', ['$event'])

    @Input() public marginDiff: number = 0;

	public onResize(event?: any) {
        this.resizeToBottom();
	}

    private dashboardWrapper: HTMLElement;

    constructor(
        public elementRef: ElementRef,
        public utils: UtilsService
    ) {
        this.dashboardWrapper = elementRef.nativeElement as HTMLElement;
    }

    ngAfterViewInit(): void {
        this.resizeToBottom();
    }

    public resizeToBottom(value: number = window.innerHeight) {
        if(this.dashboardWrapper.style) this.dashboardWrapper.style.height = value - this.utils.convertRemToPixels(this.marginDiff) + 'px';
    }
}