import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPage } from "./components/loginpage.component";

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    declarations: [
        LoginPage
    ],
    exports: []
})
export class LoginModule {
    constructor() {}
}