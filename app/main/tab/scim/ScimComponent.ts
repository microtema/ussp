import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {ScimService} from "./service/ScimService";

@Component({
    selector: "nexus-ussp-main-scim",
    templateUrl: "template/main/tab/scim/template/component.html",
    providers: [ScimService],
    pipes: [CommandPipe]
})
export class ScimComponent {

    messages = ["In this area you can see the list of SCIM Identities.", "Click on an identity item to view details."];

    commands:Command[] = [];

    emptyEntriesMessage = "No requests";

    constructor(private service:ScimService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

}
