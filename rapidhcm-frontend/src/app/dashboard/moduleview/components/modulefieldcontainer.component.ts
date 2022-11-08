import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Injector, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Subject, Subscription } from "rxjs";
import { AlertService } from "src/app/global/services/alert.service";
import { FormBuilderService } from "../services/formbuilder.service";
import { ModuleModelService } from "../services/modulemodel.service";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('formContainer', { read: ViewContainerRef, static: true }) public formContainer!: ViewContainerRef;

    constructor (
        public model: ModuleModelService,
        public alert: AlertService,
        @Inject(FormBuilderService) public formBuilder: FormBuilderService,
        public injector: Injector
    ) {}

    public subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.form = new FormGroup({}, { updateOn: 'change' });
    }

    public isFormInvalid$: BehaviorSubject<any> = new BehaviorSubject(true);

    ngAfterViewInit(): void {
        this.model.getMetadata('candidate').subscribe(metadata => 
            this.formBuilder.buildFormFromMetadata(metadata, this.formContainer, this.injector, this.form));
    
        this.subscription.add(this.form.statusChanges.subscribe(status => this.isFormInvalid$.next(status === 'INVALID')));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public form!: FormGroup;

    public onSubmit() {
        this.model.saveModel(this.form.value).subscribe(result => {
            if(!result) return;
            this.alert.createAlert('Success', 'Sucessfully added a new candidate', 'success');
            this.form.reset();
        })
    }
}