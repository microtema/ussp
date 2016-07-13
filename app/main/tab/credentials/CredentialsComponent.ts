import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {CredentialsService} from "./service/CredentialsService";

@Component({
    selector: "nexus-ussp-main-credentials",
    templateUrl: "template/main/tab/credentials/template/component.html",
    providers: [CredentialsService],
    pipes: [CommandPipe]
})
export class CredentialsComponent {

    messages = ["Here you will receive notifications related to your credentials.",
        "Click on a notification to see details and to do the required action. With clicking on 'Cancel' in the detail view you can also postpone the action. In this case, the notification will be retained in the 'Open Tasks'."];

    commands:Command[] = [];

    emptyEntriesMessage = "No credentials";

    constructor(private service:CredentialsService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

}
