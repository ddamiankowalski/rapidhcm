import { HttpClient } from "@angular/common/http";
import { Component, ComponentRef, OnInit, ViewChild } from "@angular/core";
import { BackendService } from "../../services/backend.service";
import { ConfigurationService } from "../../services/configuration.service";

@Component({
    selector: 'dashboard',
    templateUrl: '../templates/dashboard.html'
})
export class DashboardComponent implements OnInit {
    @ViewChild('loader', { read: ComponentRef, static: true }) loader: ComponentRef<any> | undefined;

    constructor(
        public http: HttpClient,
        public configuration: ConfigurationService,
        public backend: BackendService
    ) {}

    ngOnInit(): void {
        this.backend.loadConfiguration(); 
    }
}