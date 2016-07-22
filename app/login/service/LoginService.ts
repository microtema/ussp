import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {

    isLoggedIn:boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl:string = "main";

    login(loginData:LoginData):Promise<any> {

        this.isLoggedIn = loginData.userName === "admin" && loginData.password === "admin";

        if (this.isLoggedIn) {
            return Promise.resolve({status: 200});
        }

        return Promise.reject({status: 500});
    }

    logout() {
        this.isLoggedIn = false;
    }
}

interface LoginData {
    userName:string;
    password:string;
}

