import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faCircleExclamation, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { AlertService } from "src/app/global/services/alert.service";

@Component({
    selector: 'login-page',
    templateUrl: '../templates/login.html'
})
export class LoginComponent {
    constructor(
        public http: HttpClient, 
        public auth: AuthenticationService,
        public alert: AlertService,
        public router: Router
    ) {}

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

    public generateErrMessage(username: any, password: any) {
        if(
            username.control.errors && username.control.touched ||
            password.control.errors && password.control.touched
        ) {
            return "Username or password cannot be empty"
        }
        return '';
    }

    public submitLogin(event: any) {
        this.isLoading = true;
        this.auth.login(this.username, this.password).subscribe(
            res => this.handleLogin(res),
            err => this.handleLoginErr(err)
        )
    }

    public handleLogin(res: any): void {
        this.isLoading = false;
        localStorage.setItem('rapid_token', res.access_token);
        this.router.navigate(['/', 'dashboard']);
    }

    public handleLoginErr(err: any): void {
        this.isLoading = false;
        this.alert.createAlert('Invalid credentials', 'Please check username and password and log in again');
    }
}