import { Component, Input } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Component({
    selector: 'system-module-option',
    templateUrl: '../templates/moduleoption.html'
})
export class ModuleOptionComponent {
    constructor() {}

    @Input() public optionText: string | undefined;
    @Input() public icon!: IconDefinition;
}