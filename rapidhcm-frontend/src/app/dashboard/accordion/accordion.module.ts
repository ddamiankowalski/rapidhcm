import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SystemAccordionContainerComponent } from "./components/accordioncontainer.component";

@NgModule({
    imports: [
        FontAwesomeModule
    ],
    exports: [
        SystemAccordionContainerComponent
    ],
    declarations: [
        SystemAccordionContainerComponent
    ]
})
export class AccordionModule {
    constructor() {}
}
