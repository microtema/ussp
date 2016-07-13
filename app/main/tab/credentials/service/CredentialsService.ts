import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class CredentialsService {

    commands:Command[] = [];

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
