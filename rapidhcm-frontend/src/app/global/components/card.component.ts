import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { DashboardService } from "src/app/dashboard/services/dashboard.service";
import { AlertService } from "../services/alert.service";

@Component({
    selector: 'system-card',
    templateUrl: '../templates/card.html'
})
export class CardComponent {
    @Input() public sidePicture: string | undefined;
    @Input() public showReadMore: boolean = false;
    @Input() public bg: string | undefined = '1';
    @Input() public dashletId!: string;
    @Input() public isFavourite!: boolean;

    public faHeart: IconDefinition = faHeart;
    public faHeartPlus: IconDefinition = faHeartCirclePlus;

    constructor(
        public alert: AlertService,
        public dashboard: DashboardService
    ) {   
    }

    public addFavourite(): void {
        this.isFavourite = !this.isFavourite;
        this.dashboard.addFavourite(this.dashletId, this.isFavourite);
        this.alert.createAlert('Success', this.isFavourite ? 'Added to favourites' : 'Deleted from favourites', 'success', true);
    }
}