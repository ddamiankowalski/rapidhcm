import { AfterViewInit, Component, Input } from "@angular/core";

@Component({
    selector: 'system-info-card',
    templateUrl: '../templates/infocard.html'
})
export class InfoCardComponent implements AfterViewInit {
    constructor() {}

    @Input() id!: string;
    @Input() isFavourite: boolean = false;

    ngAfterViewInit(): void {
        console.log(this.id)
    }
}