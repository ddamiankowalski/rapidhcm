import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AlertService } from "src/app/global/services/alert.service";
import { ModuleModelService } from "../services/modulemodel.service";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent implements OnInit {
    constructor (
        public model: ModuleModelService,
        public alert: AlertService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({}, { updateOn: 'change' });
        this.model.getMetadata('candidate')
    }

    public form!: FormGroup;

    public onSubmit() {
        this.model.saveModel(this.form.value);
        this.alert.createAlert('Success', 'Sucessfully added a new candidate', 'success');
    }
}