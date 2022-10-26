import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccordionService {
    constructor() {}

    /**
     * Observable type that allows to follow if the accordion item has been clicked
     */
    public accordionItemClicked$: Subject<string> = new Subject();

    /**
     * Observable type that emits true if accordion has been expanded and false if its 
     * hidden
     */
    public accordionToggle$: Subject<boolean> = new Subject();
}