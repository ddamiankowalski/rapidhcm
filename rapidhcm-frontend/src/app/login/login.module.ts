import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPage } from "./components/loginpage.component";

@NgModule({
    imports: [
        FontAwesomeModule,
        FormsModule
    ],
    declarations: [
        LoginPage
    ],
    exports: []
})
export class LoginModule {
    constructor() {}
}