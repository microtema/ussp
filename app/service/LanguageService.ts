import {Injectable} from "@angular/core";

@Injectable()
export class LanguageService {

    getLanguages():Language[] {
        return [new Language("English"), new Language("German"),new Language("France", true)];
    }
}

export class Language {
    constructor(public displayName:string, public selected?:boolean) {
    }
}
