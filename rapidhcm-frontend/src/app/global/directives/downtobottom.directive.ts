import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";
import { UtilsService } from "../services/utils.service";

@Directive({
    selector: '[down-to-bottom]'
})
export class DownToBottomDirective implements AfterViewInit{
    @HostListener('window:resize', ['$event'])
	public onResize(event?: any) {
        this.resizeToBottom();
        console.log('resize')
	}

    private dashboardWrapper: HTMLElement | undefined;

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
        this.dashboardWrapper!.style.height = value - this.utils.convertRemToPixels(2.3) + 'px';
    }
}