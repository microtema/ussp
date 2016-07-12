import {Injectable} from "@angular/core";

@Injectable()
export class CommandService {

    getCommands():Command[] {
        return [new Command("Smartcard login & other"), new Command("Custom external link"), new Command("Login", null, true)];
    }
}

export class Command {
    constructor(public displayName:string, public description?:string, public selected?:boolean) {
    }
}
