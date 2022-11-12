import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ContentChildren, ElementRef, Inject, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { CardComponent } from "src/app/global/components/card.component";
import { TimeTrackerContainer } from "src/app/global/components/timetrackercontainer.component";
import { TimeTrackerTaskComponent } from "src/app/global/components/timetrackertask.component";
import { SystemGridContainer } from "../../content/components/gridcontainer.component";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector: 'dashlets',
    templateUrl: '../templates/dashlets.html'
})
export class DashletsComponent implements AfterViewInit, AfterContentInit {
    @ViewChild('dashletOutlet', { static: true, read: ViewContainerRef }) public dashletOutlet: ViewContainerRef | undefined;


    constructor(
        public dashboard: DashboardService,
        private cdRef: ChangeDetectorRef,
    ) {}

    ngAfterViewInit(): void {
        this.generateDashlets();
        this.cdRef.detectChanges();
    }

    public generateDashlets() {
        const dashletConfiguration = this.dashboard.getDashlets();
        this.dashletOutlet?.clear();
        console.log(dashletConfiguration)
        dashletConfiguration?.forEach(dashlet => {
            const gridContainer = this.dashletOutlet?.createComponent(SystemGridContainer, { index: 0 });
            gridContainer?.setInput('gridRowValue', dashlet.row);
            gridContainer?.setInput('gridColumnValue', dashlet.col);
            gridContainer?.setInput('componentName', dashlet.dashletName);
            gridContainer?.setInput('id', dashlet.id);
            gridContainer?.setInput('isFavourite', dashlet.isFavourite);
        })
    }

    ngAfterContentInit(): void {
    }
}