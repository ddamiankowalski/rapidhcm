import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertOutlet } from "./components/alertoutlet";

@NgModule({
    providers: [

    ],
    declarations: [
        AlertOutlet
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertOutlet
    ]
})
export class OutletModule {
    constructor() {}
}