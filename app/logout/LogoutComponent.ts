import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/service/LoginService";
import {Router} from "@angular/router";

@Component({
    selector: 'logout',
    template: '<span>logout</span>'
})
export class LogoutComponent {

    constructor(private loginService:LoginService, private router:Router) {
        this.loginService.logout();
        this.router.navigate(["login", {}]);
    }
}