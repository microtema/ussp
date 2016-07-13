import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class StartService {

    commands = [
        new Command("tasks", "Open Tasks", "Look up and work on your open tasks. You have <span class='badge'>51</span> open tasks."),
        new Command("credentials", "Credentials", "View and manage your credentials. You have no credentials."),
        new Command("request", "Request"),
        new Command("scim", "SCIM Identities"),
        new Command("iccns", "Read ICCNs"),
        new Command("substitute", "Substitute for Person")
    ];

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
