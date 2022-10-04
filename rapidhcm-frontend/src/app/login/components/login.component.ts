import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'login-page',
    templateUrl: '../templates/login.html'
})
export class LoginComponent {
    constructor(public http: HttpClient) {}

    public faCheck: IconDefinition = faCheck;
    public faCircleExclamation: IconDefinition = faCircleExclamation;
    public faFacebook: IconDefinition = faFacebookSquare;
    public faTwitter: IconDefinition = faTwitterSquare;
    public faGoogle: IconDefinition = faGooglePlusSquare;
    public faEye: IconDefinition = faEye;
    public faEyeSlash: IconDefinition = faEyeSlash;
    public faSpinner: IconDefinition = faSpinner;

    public togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }

    public showPassword: boolean = false;

    public username: string = '';
    public password: string = '';
    public isLoading: boolean = false;

    public pwChange(event: any) {
        console.log(event)
    }

    public loginChange(event: any) {
        console.log(event)
    }

    public submitLogin(event: any) {
        console.log('eslo', event)
        this.isLoading = true;
    }

    public generateErrMessage(username: any, password: any) {
        if(
            username.control.errors && username.control.touched ||
            password.control.errors && password.control.touched
        ) {
            return "Username or password cannot be empty"
        }
        return '';
    }

    public handleClick(event: any) {
        console.log(event)
        this.isLoading = true;
        // const payload = { username: this.login, password: this.password };

        // this.http.post('http://localhost:3000/api/auth/login', payload).subscribe(x => console.log(x))
    }
}