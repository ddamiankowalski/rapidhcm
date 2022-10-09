import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalModule } from "../global/global.module";
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