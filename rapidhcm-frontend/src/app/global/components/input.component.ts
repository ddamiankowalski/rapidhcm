import { Component, Input } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'system-input',
    templateUrl: '../templates/input.html'
})
export class InputComponent {
    /**
     * placeholder input
     */
    @Input() public placeholder?: string;
    
    /**
     * autocomplete input
     */
    @Input() public autocomplete?: string;

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
    @Input() public icon!: IconProp;

    /**
     * Additional class
     */
    @Input() public addclass?: string;

    @Input() public id?: string;

    @Input() public eyeIcon?: boolean;

    public faEye: IconDefinition = faEye;
    public faEyeSlash: IconDefinition = faEyeSlash;

    public togglePasswordVisibility() {
        if(this.type == 'password') this.type = 'text';
        else this.type = 'password';
    }

    constructor() {}
}