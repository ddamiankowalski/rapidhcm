import { NgTemplateOutlet } from "@angular/common";
import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component, ComponentRef, HostBinding, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { InfoCardComponent } from "src/app/global/components/infocard.component";
import { TimeTrackerContainer } from "src/app/global/components/timetrackercontainer.component";

@Component({
    selector: 'system-grid-container',
    templateUrl: '../templates/gridcontainer.html',
})
export class SystemGridContainer implements AfterViewInit {
    @ViewChild('template', { read: ViewContainerRef, static: true }) public template!: ViewContainerRef;

    constructor(
        public cdRef: ChangeDetectorRef
    ) {}

    private componentMap: any = {
        'timetracker': TimeTrackerContainer,
        'infocard': InfoCardComponent
    }

    @Input() public gridRowValue: number | undefined;
    @Input() public gridColumnValue: number | undefined;
    @Input() public componentName!: string;
    @Input() public id!: string;
    @Input() public isFavourite: boolean = false;

    @HostBinding('style.grid-row') 
    public get gridRow() {
        return 'span ' + this.gridRowValue;
    }
    @HostBinding('style.grid-column')
    
    public get gridColumn() {
        return 'span ' + this.gridColumnValue;
    }

    ngAfterViewInit(): void {
        if(this.componentName && this.componentMap[this.componentName] !== undefined) {
            const dashlet = this.template.createComponent(this.componentMap[this.componentName]);
            dashlet.setInput('id', this.id);
            dashlet.setInput('isFavourite', this.isFavourite);
        }
        this.cdRef.detectChanges();
    }
}