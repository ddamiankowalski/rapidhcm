import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'module-field-container',
    templateUrl: '../templates/modulefieldcontainer.html'
})
export class ModuleFieldContainerComponent {
    constructor () {}

    public form: FormGroup = new FormGroup({})

    public onSubmit() {
        console.log('submitted')
    }
}