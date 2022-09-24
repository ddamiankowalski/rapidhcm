import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'register',
    templateUrl: '../templates/register.html'
})
export class RegisterComponent {
    constructor() {}

    public faCheck: IconDefinition = faCheck;
    public faCircleExclamation: IconDefinition = faCircleExclamation;
    public faFacebook: IconDefinition = faFacebookSquare;
    public faTwitter: IconDefinition = faTwitterSquare;
    public faGoogle: IconDefinition = faGooglePlusSquare;
    public faEye: IconDefinition = faEye;

    public password: any;
    public login: any;

    public logIn() {

    }

    public loginChange(event: any) {

    }

    public pwChange(event: any) {

    }
}