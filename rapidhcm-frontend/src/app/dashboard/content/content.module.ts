import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { ContentContainerComponent } from "./components/contentcontainer.component";
import { SystemNewsContainer } from "./components/newscontainer.component";

@NgModule({
    imports: [
        GlobalModule
    ],
    declarations: [
        ContentContainerComponent,
        SystemNewsContainer
    ],
    exports: [
        ContentContainerComponent,
        SystemNewsContainer
    ]
})
export class ContentModule {}