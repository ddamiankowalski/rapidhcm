import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'dashboard',
    templateUrl: '../templates/dashboard.html'
})
export class DashboardComponent implements OnInit {
    constructor(
        public http: HttpClient
    ) {}

    ngOnInit(): void {
        setInterval(() => {
            console.log('REQUEST')
            this.http.post('http://localhost:3000/api/getuser', {}).subscribe(x => console.log(x));
        }, 10000);
    }
}