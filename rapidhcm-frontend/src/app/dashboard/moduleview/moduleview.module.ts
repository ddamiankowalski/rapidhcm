import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GlobalModule } from "src/app/global/global.module";
import { ModuleContainerComponent } from "./components/modulecontainer.component";
import { ModuleFieldContainerComponent } from "./components/modulefieldcontainer.component";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule,
        ReactiveFormsModule,
        GlobalModule
    ],
    exports: [

    ],
    declarations: [
        ModuleContainerComponent,
        ModuleFieldContainerComponent
    ]
})
export class ModuleViewModule {
    constructor() {}
}