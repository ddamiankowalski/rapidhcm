import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook, faList, faPen } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-module-options',
    templateUrl: '../templates/moduleoptions.html'
})
export class ModuleOptionsComponent {
    constructor() {}

    public faPen: IconDefinition = faPen;
    public faAddressBook: IconDefinition = faAddressBook;
    public faList: IconDefinition = faList;
}