import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/global/services/alert.service";
import { FormBuilderService } from "../services/formbuilder.service";
import { ModuleModelService } from "../services/modulemodel.service";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent implements OnInit, AfterViewInit {
    @ViewChild('formContainer', { read: ViewContainerRef, static: true }) public formContainer!: ViewContainerRef;

    constructor (
        public model: ModuleModelService,
        public alert: AlertService,
        @Inject(FormBuilderService) public formBuilder: FormBuilderService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({}, { updateOn: 'change' });
    }

    ngAfterViewInit(): void {
        this.model.getMetadata('candidate').subscribe(metadata => this.formBuilder.buildFormFromMetadata(metadata, this.formContainer));
    }

    public form!: FormGroup;

    public onSubmit() {
        this.model.saveModel(this.form.value);
        this.alert.createAlert('Success', 'Sucessfully added a new candidate', 'success');
        this.form.reset();
    }
}