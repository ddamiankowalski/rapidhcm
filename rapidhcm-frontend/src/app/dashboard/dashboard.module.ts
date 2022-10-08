import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
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
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: []
})
export class DashboardModule {

}