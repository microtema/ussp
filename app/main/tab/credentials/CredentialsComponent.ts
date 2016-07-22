import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {CredentialsService} from "./service/CredentialsService";
import {ItemsPerPagePipe} from "../../../pipe/ItemsPerPagePipe";
import {PaginationComponent, PaginationData} from "../../../directive/pagination/PaginationComponent";

@Component({
    selector: "nexus-ussp-main-credentials",
    templateUrl: "template/main/tab/credentials/template/component.html",
    providers: [CredentialsService],
    directives:[PaginationComponent],
    pipes: [CommandPipe, ItemsPerPagePipe]
})
export class CredentialsComponent {

    messages = ["Here you will receive notifications related to your credentials.",
        "Click on a notification to see details and to do the required action. With clicking on 'Cancel' in the detail view you can also postpone the action. In this case, the notification will be retained in the 'Open Tasks'."];

    commands:Command[] = [];

    emptyEntriesMessage = "No credentials";

    paginationData:PaginationData = new PaginationData(10);

    constructor(private service:CredentialsService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
            this.paginationData.totalRows = this.commands.length;
        });
    }

    onPaginationChange(paginationData:PaginationData) {
        this.paginationData = paginationData;
    }

}
