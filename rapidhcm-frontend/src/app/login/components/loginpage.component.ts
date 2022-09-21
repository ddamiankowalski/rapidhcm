import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'login-page',
    templateUrl: '../templates/loginpage.html'
})
export class LoginPage {
    constructor() {}

    public faCheck: IconDefinition = faCheck;
    public faCircleExclamation: IconDefinition = faCircleExclamation
}