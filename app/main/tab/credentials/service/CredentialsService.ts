import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class CredentialsService {

    commands:Command[] = [];

    constructor() {
        while (this.commands.length < 102) {
            this.commands[this.commands.length] = new Command("Credential_" + this.commands.length, "Credential_" + this.commands.length, new Date().toISOString());
        }
    }

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
