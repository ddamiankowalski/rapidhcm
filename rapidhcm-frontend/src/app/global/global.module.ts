import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AlertComponent } from "./components/alert.component";
import { AvatarComponent } from "./components/avatar.component";
import { ButtonComponent } from "./components/button.component";
import { CardComponent } from "./components/card.component";
import { GlobalLoaderComponent } from "./components/globalloader.component";
import { InputComponent } from "./components/input.component";
import { InputCheckboxComponent } from "./components/inputcheckbox.component";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule
    ],
    declarations: [
        CardComponent,
        InputComponent,
        InputCheckboxComponent,
        ButtonComponent,
        AlertComponent,
        GlobalLoaderComponent,
        AvatarComponent
    ],
    exports: [
        CardComponent,
        InputComponent,
        InputCheckboxComponent,
        ButtonComponent,
        AlertComponent,
        GlobalLoaderComponent,
        AvatarComponent
    ],
    providers: [
    ]
})
export class GlobalModule {
    constructor() {}
}