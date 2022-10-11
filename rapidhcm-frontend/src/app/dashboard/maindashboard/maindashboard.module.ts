import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { AccordionModule } from "../accordion/accordion.module";
import { ContentModule } from "../content/content.module";
import { TopMenuModule } from "../topmenu/topmenu.module";
import { DashboardComponent } from "./components/dashboard.component";

@NgModule({
    imports: [ 
        GlobalModule,
        CommonModule,
        TopMenuModule,
        AccordionModule,
        ContentModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class MainDashboard {}