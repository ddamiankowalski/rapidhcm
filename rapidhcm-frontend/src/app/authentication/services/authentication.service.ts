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

    public login(username: string, password: string): Observable<any> {
        return this.http.post('http://localhost:3000/api/auth/login', { username, password }, { headers: new HttpHeaders().set('Accept', 'application/json') })
    }

    public isLoggedIn() {
        const token = this.getToken();
        return this.getDecodedToken(token);
    }
}