import { Routes } from "@angular/router";
import { GlobalCanLoad } from "../authentication/services/globalcanload.service";
import { DashboardComponent } from "../dashboard/maindashboard/components/dashboard.component";
import { NewsComponent } from "../dashboard/maindashboard/components/news.component";
import { ModuleContainerComponent } from "../dashboard/moduleview/components/modulecontainer.component";
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
        loadChildren: () => import('../dashboard/maindashboard/maindashboard.module').then(m => m.MainDashboard),
        canLoad: [GlobalCanLoad]
    },
    {
        path: '**',
        redirectTo: 'auth'
    },
]

export const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'module',
                component: ModuleContainerComponent,
                data: { animation: 'showModule' }
            },
            {
                path: '',
                component: NewsComponent,
                data: { animation: 'showRoute' }
            },
        ]
    }
];