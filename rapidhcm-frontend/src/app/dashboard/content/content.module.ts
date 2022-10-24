import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { ContentContainerComponent } from "./components/contentcontainer.component";
import { SystemGridContainer } from "./components/gridcontainer.component";

@NgModule({
    imports: [
        GlobalModule,
        CommonModule
    ],
    declarations: [
        ContentContainerComponent,
        SystemGridContainer
    ],
    exports: [
        ContentContainerComponent,
        SystemGridContainer
    ]
})
export class ContentModule {}