import { ComponentRef, Injectable, Injector, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from "src/app/global/components/input.component";

@Injectable({
    providedIn: 'root'
})
export class FormBuilderService { 
    constructor() {}

    private pages: number = 0;



    public buildFormFromMetadata(metadata: any, formContainer: ViewContainerRef, injector: Injector, form: FormGroup): void {
        metadata.forEach((fieldInfo: any) => {
            let referenceField = formContainer.createComponent(InputComponent, { injector: injector });
            this.setFieldMetadataInputs(referenceField, fieldInfo, injector, form);
            // if(window.innerWidth > document.documentElement.clientWidth) referenceField.
        })
    }

    public setFieldMetadataInputs(referenceField: ComponentRef<InputComponent>, fieldInfo: any, injector: Injector, form: FormGroup): void {
        console.log(fieldInfo);
        referenceField.setInput('fieldname', fieldInfo.fieldname);
        referenceField.setInput('form', form);
        referenceField.setInput('label', fieldInfo.fieldname);
        referenceField.setInput('placeholder', 'Your ' + fieldInfo.fieldname);
        referenceField.setInput('isDisabled', fieldInfo.fieldname === 'createdDate' || fieldInfo.fieldname === 'updatedDate')
    }
}