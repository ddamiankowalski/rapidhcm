import { Routes } from "@angular/router";
import { LoginPage } from "../login/components/loginpage.component";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: '**',
        component: LoginPage
    }
]