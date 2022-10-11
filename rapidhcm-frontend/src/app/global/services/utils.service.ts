import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor() {}

    /**
     * A function that converts rems to pixels
     * @param rem amount in rems to convert into pixels
     * @returns converted value of pixels
     */
    public convertRemToPixels(rem: any): number {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
}