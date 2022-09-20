import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'login-page',
    templateUrl: '../templates/loginpage.html'
})
export class LoginPage {
    constructor() {}

    public squareIcon: IconDefinition = faCheck;
}