import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class LoginService {

    isLoggedIn:boolean = false;

    constructor(private cookieService:CookieService) {
        this.isLoggedIn = this.cookieService.get("login") != null;
    }

    // store the URL so we can redirect after logging in
    redirectUrl:string = "main";

    login(loginData:LoginData):Promise<any> {

        this.isLoggedIn = loginData.userName === "admin" && loginData.password === "admin";

        if (this.isLoggedIn) {
            this.cookieService.put("login", "true");
            return Promise.resolve({status: 200});
        }

        return Promise.reject({status: 500});
    }

    logout() {
        this.cookieService.remove("login");
        this.isLoggedIn = false;
    }
}

interface LoginData {
    userName:string;
    password:string;
}

