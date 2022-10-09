import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { TopMenuModule } from "../topmenu/topmenu.module";
import { DashboardComponent } from "./components/dashboard.component";

@NgModule({
    imports: [ 
        GlobalModule,
        CommonModule,
        TopMenuModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class MainDashboard {}