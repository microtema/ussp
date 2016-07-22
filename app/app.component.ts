import {Component} from "@angular/core";
import {LanguageService, Language} from "./service/LanguageService"
import {BuildInfoService, BuildInfo} from "./service/BuildInfoService";
import {ROUTER_DIRECTIVES, RouterLink} from '@angular/router';
import {LoginService} from "./login/service/LoginService";
declare var $:any;

@Component({
    selector: "nexus-ussp",
    templateUrl: "template/component.html",
    providers: [LanguageService, BuildInfoService],
    directives: [ROUTER_DIRECTIVES, RouterLink]
})
export class AppComponent {

    languages:Language[] = null;

    selectedLanguage:Language = null;

    buildInfo:BuildInfo = null;

    constructor(private languageService:LanguageService, private buildInfoService:BuildInfoService, private loginService:LoginService) {

        this.languages = languageService.getLanguages();
        this.selectedLanguage = this.languages[2];

        this.buildInfo = buildInfoService.getBuildInfo();
    }


    get selectLanguage() {
        return this.selectedLanguage;
    }

    set selectLanguage(selectedLanguage:Language) {
        this.selectedLanguage = selectedLanguage;
    }

    isLoggedIn():boolean {
        return this.loginService.isLoggedIn;
    }
}
