import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthPage } from "./components/authpage";
import { LoginComponent } from "./components/login.component";
import { RegisterComponent } from "./components/register.component";

@NgModule({
    imports: [
        FontAwesomeModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        AuthPage,
        RegisterComponent,
        LoginComponent
    ],
    exports: []
})
export class AuthModule {
    constructor() {}
}