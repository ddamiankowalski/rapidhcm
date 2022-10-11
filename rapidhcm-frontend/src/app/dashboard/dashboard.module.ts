import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalModule } from "../global/global.module";
import { AccordionModule } from "./accordion/accordion.module";
import { DashboardComponent } from "./maindashboard/components/dashboard.component";
import { MainDashboard } from "./maindashboard/maindashboard.module";

const routes: Routes = [
    {
        path: '**',
        component: DashboardComponent
    }
];
@NgModule({
    imports: [
        AccordionModule,
        MainDashboard,
        GlobalModule,
        MainDashboard,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: []
})
export class DashboardModule {

}