import { Component, ElementRef, ViewChild } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendarPlus, faFileCircleQuestion, faPencilRuler } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'time-tracker-container',
    templateUrl: '../templates/timetrackercontainer.html'
})
export class TimeTrackerContainer {
    @ViewChild('progress') public progress: ElementRef | undefined;

    public _degValue: number = 75;
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
        this._degValue == this.endValue
        // setTimeout(() => {
        //     if(this._degValue == this.endValue) return;
        //     this._degValue++;
        //     this.startDegValueSetting();
        // }, 10);
    }

    public faPencilRuler: IconDefinition = faPencilRuler;
    public faCalendarPlus: IconDefinition = faCalendarPlus;
    public faQuestionCircle: IconDefinition = faFileCircleQuestion;
    constructor() {}
}
