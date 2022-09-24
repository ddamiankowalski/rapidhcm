 import { Component } from "@angular/core";
import { ChildrenOutletContexts } from "@angular/router";
import { fader } from "src/app/routing/routeanimations";

@Component({
    selector: 'auth-page',
    templateUrl: '../templates/authpage.html',
    animations: [
        fader,
    ]
})
export class AuthPage {
    constructor(private contexts: ChildrenOutletContexts) {}

}