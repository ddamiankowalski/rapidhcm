import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthenticationService } from './authentication/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient, public auth: AuthenticationService) {}
  ngOnInit(): void {
    this.auth.login().subscribe(x => console.log(x));
  }

  title = 'rapidhcm-frontend';
}
