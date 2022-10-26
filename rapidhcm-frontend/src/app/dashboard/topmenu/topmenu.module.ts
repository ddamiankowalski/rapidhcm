import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GlobalModule } from "src/app/global/global.module";
import { FavItemComponent } from "./components/favitem.component";
import { TopMenuContainerComponent } from "./components/topmenucontainer.component";

@NgModule({
    imports: [
        GlobalModule,
        CommonModule,
        FormsModule,
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