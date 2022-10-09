import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'system-global-loader',
    templateUrl: '../templates/globalloader.html'
})
export class GlobalLoaderComponent implements OnInit {
    constructor(
        public router: Router
    ) {}

    public currentStep: string = 'Modules';

    ngOnInit(): void {
    }
}