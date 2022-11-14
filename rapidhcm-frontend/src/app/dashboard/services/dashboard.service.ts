import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { BackendService } from "./backend.service";

interface Dashlet {
    id: string
    dashletId: string
    dashletName: string
    isFavourite: boolean
    row: number
    col: number
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(
        public backend: BackendService
    ) {

    }

    private _dashlets: Dashlet[] | undefined;

    public setDashlets(dashletsInfo: any): void {
        this._dashlets = dashletsInfo;
    }

    public getDashlets(): Dashlet[] | undefined {
        return this._dashlets;
    }

    public addFavourite(dashletId: string, isFavourite: boolean): Observable<any> {
        let result$ = new Subject();

        const payload = { dashletId, isFavourite }
        
        this.backend.postRequest('dashlet/addfavourite', payload).subscribe(
            {
                next: res => result$.next(res),
                error: err => console.log(err)
            }
        )

        return result$.asObservable();
    }
}