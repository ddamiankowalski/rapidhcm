import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent implements OnInit {
    constructor () {}

    ngOnInit(): void {
        this.form = new FormGroup({}, { updateOn: 'change' });
    }

    public form!: FormGroup;

    public onSubmit() {
        console.log('submitted')
    }
}