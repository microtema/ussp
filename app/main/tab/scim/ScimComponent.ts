import {Component} from "@angular/core";
import {Command, CommandService} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {ScimService} from "./service/ScimService";
import {PaginationComponent, PaginationData} from "../../../directive/pagination/PaginationComponent";
import {ItemsPerPagePipe} from "../../../pipe/ItemsPerPagePipe";

@Component({
    selector: "nexus-ussp-main-scim",
    templateUrl: "template/main/tab/scim/template/component.html",
    providers: [ScimService, CommandService],
    directives:[PaginationComponent],
    pipes: [CommandPipe, ItemsPerPagePipe]
})
export class ScimComponent {

    messages = ["In this area you can see the list of SCIM Identities.", "Click on an identity item to view details."];

    commands:Command[] = [];

    emptyEntriesMessage = "No requests";

    paginationData:PaginationData = new PaginationData(10);

    constructor(private service:ScimService) {
        service.getCommands().subscribe((commands:Command[]) => {
            this.commands = commands;
            this.paginationData.totalRows = this.commands.length;
        });
    }

    onPaginationChange(paginationData:PaginationData) {
        this.paginationData = paginationData;
    }
}
