import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class ScimService {

    commands:Command[] = [];

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
