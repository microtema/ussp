import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class StartService {

    commands = [
        new Command("Open Tasks", "Look up and work on your open tasks. You have <span class='badge'>51</span> open tasks."),
        new Command("Credentials", "View and manage your credentials. You have no credentials."),
        new Command("Request"),
        new Command("SCIM Identities"),
        new Command("Read ICCNs"),
        new Command("Substitute for Person")
    ];

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
