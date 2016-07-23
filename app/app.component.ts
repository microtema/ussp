import {Component, OnInit} from "@angular/core";
import {LanguageService, Language} from "./service/LanguageService"
import {BuildInfoService, BuildInfo} from "./service/BuildInfoService";
import {ROUTER_DIRECTIVES, RouterLink} from '@angular/router';
import {LoginService} from "./login/service/LoginService";
import {
    TRANSLATE_PROVIDERS,
    TranslateService,
    TranslateLoader,
    TranslateStaticLoader
} from 'ng2-translate/ng2-translate';
import {Http} from "@angular/http";
import {TranslateComponent} from "./directive/translate/TranslateComponent";
declare var $:any;

@Component({
    selector: "nexus-ussp",
    templateUrl: "template/component.html",
    providers: [LanguageService, BuildInfoService, TranslateService],
    directives: [ROUTER_DIRECTIVES, RouterLink, TranslateComponent]
})
export class AppComponent implements OnInit {

    languages:Language[] = null;

    selectedLanguage:Language = null;

    buildInfo:BuildInfo = null;

    constructor(private languageService:LanguageService, private buildInfoService:BuildInfoService, private loginService:LoginService, private translate:TranslateService) {

        this.languages = this.languageService.getLanguages();
        this.selectedLanguage = this.languages.find(lang => lang.selected);
        this.buildInfo = this.buildInfoService.getBuildInfo();
    }

    ngOnInit() {
        this.changeLanguage(this.selectedLanguage);
    }

    changeLanguage(selectedLanguage:Language) {
        this.selectedLanguage = selectedLanguage;
        this.translate.use(this.selectedLanguage.language);
    }

    isLoggedIn():boolean {
        return this.loginService.isLoggedIn;
    }
}
