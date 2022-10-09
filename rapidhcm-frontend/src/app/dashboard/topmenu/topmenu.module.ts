import { NgModule } from "@angular/core";
import { GlobalModule } from "src/app/global/global.module";
import { TopMenuContainerComponent } from "./components/topmenucontainer.component";

@NgModule({
    imports: [
        GlobalModule
    ],
    exports: [
        TopMenuContainerComponent
    ],
    declarations: [
        TopMenuContainerComponent
    ]
})
export class TopMenuModule {}