import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jwt_decode from "jwt-decode";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
    constructor(
        public http: HttpClient
    ) {}

    private _username?: string;

    get username(): string | undefined {
        return this._username;
    }

    set username(username: string | undefined) {
        this._username = username;
    }

    public getToken(): any {
        return localStorage.getItem('rapid_token');
    }

    public setUserInfo(userInfo: any) {
        this.username = userInfo.firstName;
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

    public clearSession() {
        localStorage.removeItem('rapid_token');
        this.username = '';
    }
}