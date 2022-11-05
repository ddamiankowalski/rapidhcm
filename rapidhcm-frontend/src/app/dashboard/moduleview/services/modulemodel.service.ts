import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { BackendService } from "../../services/backend.service";

@Injectable({
    providedIn: 'root'
})
export class ModuleModelService {
    constructor(
        public backend: BackendService
    ) {}

    /**
     * A generic subject for saving the model
     */
    public modelSaved$: Subject<any> = new Subject();

    /**
     * A function that saves the current modulemodel on the backend
     * @returns an observable that says if the model has been saved
     */
    public saveModel(data: any): Observable<any> {
        // TODO: dodaj inny payload
        const payload = data;

        this.backend.postRequest('candidate', payload).subscribe(
            {
                next: data => this.modelSaved$.next(data),
                error: err => console.log(err)
            }
        )

        return this.modelSaved$.asObservable();
    }
}   