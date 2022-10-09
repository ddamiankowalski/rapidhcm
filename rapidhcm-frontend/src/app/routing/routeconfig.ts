import { Routes } from "@angular/router";
import { GlobalCanLoad } from "../authentication/services/globalcanload.service";
import { AuthPage } from "../login/components/authpage";
import { LoginComponent } from "../login/components/login.component";
import { RegisterComponent } from "../login/components/register.component";

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPage,
        canActivate: [GlobalCanLoad],
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: '**',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [GlobalCanLoad]
    },
    {
        path: '**',
        redirectTo: 'auth'
    },
]