import {Component} from "@angular/core";
import {Validators, ControlGroup, Control} from "@angular/common";
import {Router}  from '@angular/router';
import {CommandService, Command} from "../service/CommandService";
import {LoginService} from "./service/LoginService";
declare var $:any;

@Component({
    selector: "nexus-ussp-login",
    templateUrl: "template/login/component.html",
    providers: [CommandService, LoginService]
})
export class LoginComponent {

    commands:Command[] = null;
    loginModalVisible = false;
    errorMessage:string = null;
    loginForm = new ControlGroup({
        userName: new Control("", Validators.required),
        password: new Control("", Validators.required)
    });

    constructor(private commandService:CommandService, private loginService:LoginService, private router:Router) {

        this.commands = commandService.getCommands();
    }

    doLogin(loginModal:HTMLElement) {

        this.loginService.login(this.loginForm.value).then(() => {
            $(loginModal).modal("hide");
            this.router.navigate(["main", {}]);
        }).catch(() => {
            this.errorMessage = "Unauthenticated user: Either the user name or the password you entered is not valid. Please try again.";
        });
    }

    executeCommand(command:Command, loginModal:HTMLElement) {
        $(loginModal).modal("show");
    }

    showLoginModal() {
        this.loginModalVisible = true;
    }

    hideLoginModal() {
        this.loginModalVisible = false;
    }
}
