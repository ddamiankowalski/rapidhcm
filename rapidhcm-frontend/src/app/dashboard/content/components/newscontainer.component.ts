import { Component } from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-news-container',
    templateUrl: '../templates/newscontainer.html'
})
export class SystemNewsContainer {
    public faPencilRuler: IconDefinition = faPencilRuler;

    constructor() {}
}