import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { ContentContainerComponent } from "./components/contentcontainer.component";

@NgModule({
    imports: [
        GlobalModule
    ],
    declarations: [
        ContentContainerComponent
    ],
    exports: [
        ContentContainerComponent
    ]
})
export class ContentModule {}