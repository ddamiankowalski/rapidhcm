import { Component, OnInit } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'register',
    templateUrl: '../templates/register.html'
})
export class RegisterComponent implements OnInit {
    constructor() {}

    public faCheck: IconDefinition = faCheck;
    public faCircleExclamation: IconDefinition = faCircleExclamation;
    public faFacebook: IconDefinition = faFacebookSquare;
    public faTwitter: IconDefinition = faTwitterSquare;
    public faGoogle: IconDefinition = faGooglePlusSquare;
    public faEye: IconDefinition = faEye;
    public faUser: IconDefinition = faUser;

    ngOnInit(): void {
    }

    public isLoading: boolean = false;

    public handleClick(event: any) {
        console.log(event);
        this.isLoading = true;
    }

    public password: any;
    public passwordRepeat: any;
    public login: any;
    public email: any;

    public logIn() {

    }

    public loginChange(event: any) {

    }

    public emailChange(event: any) {

    }

    public pwChange(event: any) {

    }

    public pwRepeatChange(event: any) {

    }
}