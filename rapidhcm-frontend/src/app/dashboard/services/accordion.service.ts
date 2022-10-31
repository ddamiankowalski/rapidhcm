import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AccordionService {
    constructor(
        public router: Router,
        public route: ActivatedRoute
    ) {}

    /**
     * Observable type that allows to follow if the accordion item has been clicked
     */
    public accordionItemClicked$: Subject<string> = new Subject();

    /**
     * Observable type that emits true if accordion has been expanded and false if its 
     * hidden
     */
    public accordionToggle$: Subject<boolean> = new Subject();

    public changeTab(tabName: string) {
        this.accordionItemClicked$.next(tabName);
        let target = tabName === 'News' ? 'news' : 'module';
        this.router.navigateByUrl('/dashboard/' + target);
        console.log(this.route)
    }
}