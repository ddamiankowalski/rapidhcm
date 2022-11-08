import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { EmailValidator, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-input',
    templateUrl: '../templates/input.html'
})
export class InputComponent implements OnInit {    
    ngOnInit(): void {
        this.form.addControl(this.fieldname, this.fb.control({ value: this.value, disabled: this.isDisabled }, { validators: [Validators.required] }));
        this.form.get(this.fieldname)?.valueChanges.subscribe((status: any) => this.handleStatus(status))
    }

    public handleBlur() {
        if(!this.form.get(this.fieldname)?.valid) {
            this.hasError = true;
            this.helpMessage = 'This field is required'
        }
    }

    public hasError: boolean = false;

    public handleStatus(value: any) {
        if((this.form.controls[this.fieldname].status === 'INVALID' && this.form.controls[this.fieldname].touched)) {
            this.hasError = true;
        } else {
            this.hasError = false;
        }
    }

    @Input() public value: any;

    @Input() public isDisabled!: boolean;

    @Input() public form!: FormGroup;

    /**
     * placeholder input
     */
    @Input() public placeholder?: string;
    
    /**
     * autocomplete input
     */
    @Input() public autocomplete?: string = 'false';

    /**
     * input type text by default
     */
    @Input() public type?: string;

    /**
     * Input of the label property
     */
    @Input() public label: string = 'Default Label';

    /**
     * Input state of the input
     */
    @Input() public inputState: 'error' | 'success' | 'default' = 'default';

    /**
     * Message of the help below the input
     */
    @Input() public helpMessage?: string;

    /**
     * Icon input
     */
    @Input() public icon: IconProp = faCircleExclamation;

    /**
     * Additional class
     */
    @Input() public addclass?: string;

    @Input() public fieldname: string = '';

    @Input() public eyeIcon?: boolean;

    public faEye: IconDefinition = faEye;
    public faEyeSlash: IconDefinition = faEyeSlash;

    public togglePasswordVisibility() {
        this.type = this.type === 'password' ? 'text' : 'password';
    }

    constructor(public fb: FormBuilder) {}
}