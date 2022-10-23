import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GlobalModule } from "src/app/global/global.module";
import { FavItemComponent } from "./components/favitem.component";
import { TopMenuContainerComponent } from "./components/topmenucontainer.component";

@NgModule({
    imports: [
        GlobalModule,
        FontAwesomeModule
    ],
    exports: [
        TopMenuContainerComponent
    ],
    declarations: [
        TopMenuContainerComponent,
        FavItemComponent
    ]
})
export class TopMenuModule {}