import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SystemAccordionContainerComponent } from "./components/accordioncontainer.component";
import { AccordionItemComponent } from "./components/accordionitem.component";
import { AccordionSubItemComponent } from "./components/accordionsubitem.component";

@NgModule({
    imports: [
        FontAwesomeModule,
        CommonModule
    ],
    exports: [
        SystemAccordionContainerComponent,
        AccordionItemComponent
    ],
    declarations: [
        SystemAccordionContainerComponent,
        AccordionItemComponent,
        AccordionSubItemComponent
    ]
})
export class AccordionModule {
    constructor() {}
}
