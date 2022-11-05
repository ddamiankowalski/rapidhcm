import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModuleModelService } from "../services/modulemodel.service";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent implements OnInit {
    constructor (
        public model: ModuleModelService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({}, { updateOn: 'change' });
    }

    public form!: FormGroup;

    public onSubmit() {
        this.model.saveModel(this.form.value);
    }
}