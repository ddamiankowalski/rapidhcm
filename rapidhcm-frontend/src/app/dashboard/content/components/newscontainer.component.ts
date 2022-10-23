import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { faCalendarPlus, faFileCircleQuestion, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-news-container',
    templateUrl: '../templates/newscontainer.html'
})
export class SystemNewsContainer implements AfterViewInit {
    @ViewChild('progress') public progress: ElementRef | undefined;
    @HostBinding('style.grid-row') gridRow = 'span 6'; 

    public _degValue: number = 0;
    public endValue: number = 75;

    public ngAfterViewInit(): void {
        this.startDegValueSetting();
    }

    get degValue(): string {
        return `conic-gradient(#3742FA ${this.getParsedDegValue(this._degValue)}deg, rgba(55, 66, 250, 0.2) 0deg)`;
    }

    get degPercent(): number {
        return this._degValue;
    }

    public getParsedDegValue(degValue: number): number {
        return degValue / 100 * 360;
    }

    public startDegValueSetting() {
        setTimeout(() => {
            if(this._degValue == this.endValue) return;
            this._degValue++;
            this.startDegValueSetting();
        }, this.easeOutQuint(this._degValue / 100) * 20);
    }

    public easeOutQuint(x: number): number {
        return 1 - Math.pow(1 - x, 5);
    }

    public faPencilRuler: IconDefinition = faPencilRuler;
    public faCalendarPlus: IconDefinition = faCalendarPlus;
    public faQuestionCircle: IconDefinition = faFileCircleQuestion;

    constructor() {}
}