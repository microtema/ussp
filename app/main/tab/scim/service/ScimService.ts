import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class ScimService {

    commands:Command[] = [];

    constructor() {
        while (this.commands.length < 21) {
            this.commands[this.commands.length] = new Command("SCIM_" + this.commands.length, "SCIM_" + this.commands.length, new Date().toISOString());
        }
    }

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
