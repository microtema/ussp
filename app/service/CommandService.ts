import {Injectable} from "@angular/core";

@Injectable()
export class CommandService {

    getCommands():Command[] {
        return [new Command("smartcardlogin", "Smartcard login & other"), new Command("externallink", "Custom external link"), new Command("login", "Login", null, null, true)];
    }
}

export class Command {
    constructor(public id:string, public displayName:string, public description?:string, public restCommand?:string, public selected?:boolean) {

    }
}
