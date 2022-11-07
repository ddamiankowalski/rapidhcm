import { Injectable, ViewContainerRef } from "@angular/core";
import { ButtonComponent } from "src/app/global/components/button.component";

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService { 
    constructor() {}

    public buildFormFromMetadata(metadata: any, formContainer: ViewContainerRef) {
        console.log(metadata, formContainer);
        formContainer.createComponent(ButtonComponent)
    }
}