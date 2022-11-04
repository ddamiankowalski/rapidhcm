import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AlertComponent } from "./components/alert.component";
import { AvatarComponent } from "./components/avatar.component";
import { ButtonComponent } from "./components/button.component";
import { CardComponent } from "./components/card.component";
import { GlobalLoaderComponent } from "./components/globalloader.component";
import { InputComponent } from "./components/input.component";
import { InputCheckboxComponent } from "./components/inputcheckbox.component";
import { ModuleOptionComponent } from "./components/moduleoption.component";
import { ModuleOptionsComponent } from "./components/moduleoptions.component";
import { SliderCard } from "./components/slidercard.component";
import { TimeTrackerContainer } from "./components/timetrackercontainer.component";
import { TimeTrackerTaskComponent } from "./components/timetrackertask.component";
import { DownToBottomDirective } from "./directives/downtobottom.directive";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        CardComponent,
        InputComponent,
        InputCheckboxComponent,
        ButtonComponent,
        AlertComponent,
        GlobalLoaderComponent,
        AvatarComponent,
        DownToBottomDirective,
        SliderCard,
        TimeTrackerTaskComponent,
        TimeTrackerContainer,
        ModuleOptionsComponent,
        ModuleOptionComponent
    ],
    exports: [
        CardComponent,
        InputComponent,
        InputCheckboxComponent,
        ButtonComponent,
        AlertComponent,
        GlobalLoaderComponent,
        AvatarComponent,
        DownToBottomDirective,
        SliderCard,
        TimeTrackerTaskComponent,
        TimeTrackerContainer,
        ModuleOptionsComponent,
        ModuleOptionComponent
    ],
    providers: [
    ]
})
export class GlobalModule {
    constructor() {}
}