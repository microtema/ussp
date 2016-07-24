import {Injectable} from "@angular/core";
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class LanguageService {

    languages:Language[] = [new Language("en", "English"), new Language("de", "German"), new Language("fr", "France")];

    constructor(private cookieService:CookieService) {

        let lang = this.cookieService.get("language");

        this.languages.forEach((language:Language) => {
            language.selected = (language.language === lang)
        });
    }

    getLanguages():Language[] {
        return this.languages;
    }

    setLanguage(language:Language) {
        this.cookieService.put("language", language.language);
    }
}

export class Language {
    constructor(public language:string, public displayName:string, public selected?:boolean) {
    }
}
