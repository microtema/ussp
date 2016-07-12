import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {

    login(loginData:LoginData):Promise<any> {

        if(loginData.userName === "admin" && loginData.password === "admin"){
            return Promise.resolve({status: 200});
        }

        return Promise.reject({status: 500});
    }
}

interface LoginData {
    userName:string;
    password:string;
}

