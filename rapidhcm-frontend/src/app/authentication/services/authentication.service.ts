import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthenticationService {
    constructor(public http: HttpClient) {}

    public getToken(): any {
        return localStorage.getItem('rapid_token');
    }

    public getDecodedToken(token: string): any {
        try {
            return jwt_decode(token);
        } catch (err) {
            return null;
        }
    }

    public login(): Observable<any> {
        // send a log in, verify if its correct. if it is
        return this.http.post('http://localhost:3000/api/auth/login', { username: "damiasn", password: "danuiab" }, { headers: new HttpHeaders().set('Accept', 'application/json') })
    }


    // this.httpClient.post('http://localhost:3000/api/auth/register', { username: "damian", password: "danuiab", email: "dkowalski@gmail.com" }, { headers: new HttpHeaders().set('Accept', 'application/json') }).pipe(
    //     catchError((err) => {
    //       return throwError(err)
    //     })
}