import {Injectable} from '@angular/core';
import {Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {LoginService} from "../login/service/LoginService";

@Injectable()
export class AuthGuard {

    constructor(private loginService:LoginService, private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {

        if (this.loginService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.loginService.redirectUrl = state.url;

        // Navigate to the login page
        this.router.navigate(['login']);

        return false;
    }

}