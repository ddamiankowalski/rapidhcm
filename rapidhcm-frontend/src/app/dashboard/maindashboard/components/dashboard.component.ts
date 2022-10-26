import { HttpClient } from "@angular/common/http";
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from "rxjs";
import { AccordionService } from "../../services/accordion.service";
import { BackendService } from "../../services/backend.service";
import { ConfigurationService } from "../../services/configuration.service";

@Component({
    selector: 'dashboard',
    templateUrl: '../templates/dashboard.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
    constructor(
        public http: HttpClient,
        public configuration: ConfigurationService,
        public backend: BackendService,
        public accordion: AccordionService,
        public cdRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.backend.loadConfiguration();
    }

    ngOnDestroy(): void {
    }
}