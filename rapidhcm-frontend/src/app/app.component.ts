import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.httpClient.post('http://localhost:3000/api/auth/register', { username: "damian", password: "danuiab", email: "dkowalski@gmail.com" }, { headers: new HttpHeaders().set('Accept', 'application/json') }).pipe(
      catchError((err) => {
        return throwError(err)
      })
    ).subscribe(x => console.log(x))
  }

  title = 'rapidhcm-frontend';
}
