import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector: 'system-grid-container',
    templateUrl: '../templates/gridcontainer.html'
})
export class SystemGridContainer {
    @Input() public gridRowValue: number | undefined;
    @Input() public gridColumnValue: number | undefined;

    @HostBinding('style.grid-row') 
    public get gridRow() {
        return 'span ' + this.gridRowValue;
    }
    @HostBinding('style.grid-column')
    
    public get gridColumn() {
        return 'span ' + this.gridColumnValue;
    }

    constructor() {}
}