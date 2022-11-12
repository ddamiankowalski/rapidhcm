import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { GlobalModule } from "src/app/global/global.module";
import { AuthModule } from "src/app/login/login.module";
import { dashboardRoutes } from "src/app/routing/routeconfig";
import { AccordionModule } from "../accordion/accordion.module";
import { ContentModule } from "../content/content.module";
import { ModuleViewModule } from "../moduleview/moduleview.module";
import { TopMenuModule } from "../topmenu/topmenu.module";
import { DashboardComponent } from "./components/dashboard.component";
import { DashletsComponent } from "./components/dashlets.component";

@NgModule({
    imports: [ 
        GlobalModule,
        CommonModule,
        TopMenuModule,
        AccordionModule,
        ModuleViewModule,
        ContentModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        DashboardComponent,
        DashletsComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class MainDashboard {}