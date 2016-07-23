import {Component} from "@angular/core";
import {Validators, ControlGroup, Control} from "@angular/common";
import {Router}  from '@angular/router';
import {CommandService, Command} from "../service/CommandService";
import {LoginService} from "./service/LoginService";
import {TranslateComponent} from "../directive/translate/TranslateComponent";
declare var $:any;

@Component({
    selector: "nexus-ussp-login",
    templateUrl: "template/login/component.html",
    providers: [CommandService],
    directives: [TranslateComponent]
})
export class LoginComponent {

    commands:Command[] = null;

    loginModalVisible = false;

    errorMessage:string = null;

    loginForm = new ControlGroup({
        userName: new Control("", Validators.required),
        password: new Control("", Validators.required)
    });

    restUrl:string = "rest/process/login.json";

    constructor(private commandService:CommandService, private loginService:LoginService, private router:Router) {
        commandService.getCommands(this.restUrl).subscribe((commands) => {
            this.commands = commands
        });
    }

    doLogin(loginModal:HTMLElement) {

        this.loginService.login(this.loginForm.value).then(() => {
            $(loginModal).modal("hide");
            console.info(this.loginService.redirectUrl);
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
