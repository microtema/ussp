import {Component} from "@angular/core";
import {LanguageService, Language} from "./service/LanguageService"
import {BuildInfoService, BuildInfo} from "./service/BuildInfoService";
import {ROUTER_DIRECTIVES} from '@angular/router';
declare var $:any;

@Component({
    selector: "nexus-ussp",
    templateUrl: "template/component.html",
    providers: [LanguageService, BuildInfoService],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    languages:Language[] = null;

    selectedLanguage:Language = null;

    buildInfo:BuildInfo = null;

    constructor(private languageService:LanguageService, private buildInfoService:BuildInfoService) {

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
}
