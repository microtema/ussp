import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {RequestsService} from "./service/RequestsService";

@Component({
    selector: "nexus-ussp-main-requests",
    templateUrl: "template/main/tab/requests/template/component.html",
    providers: [RequestsService],
    pipes: [CommandPipe]
})
export class RequestsComponent {

    messages = ["In this area you can see the list of your requests.", "Click on a request item to view details, cancel it or do other possible actions."];

    commands:Command[] = [];

    emptyEntriesMessage = "No requests";

    constructor(private service:RequestsService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

}
