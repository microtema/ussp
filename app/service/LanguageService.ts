import {Injectable} from "@angular/core";

@Injectable()
export class LanguageService {

    getLanguages():Language[] {
        return [new Language("en", "English"), new Language("de", "German", true), new Language("fr", "France")];
    }
}

export class Language {
    constructor(public language:string, public displayName:string, public selected?:boolean) {
    }
}
