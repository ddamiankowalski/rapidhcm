import { Routes } from "@angular/router";
import { GlobalLoaderComponent } from "../global/components/globalloader.component";
import { AuthPage } from "../login/components/authpage";
import { LoginComponent } from "../login/components/login.component";
import { RegisterComponent } from "../login/components/register.component";

export const routes: Routes = [
    {
        path: '**',
        component: GlobalLoaderComponent
    },
    {
        path: 'auth',
        component: AuthPage,
        children: [
            {
                path: 'login',
                component: LoginComponent,
                data: { animation: 'loginTransition' }
            },
            {
                path: 'register',
                component: RegisterComponent,
                data: { animation: 'registerTransition' }
            },
            {
                path: '**',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
    }
]