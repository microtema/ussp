import {Component} from "@angular/core";
import {Command, CommandService} from "../../../service/CommandService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {RequestsService} from "./service/RequestsService";
import {ItemsPerPagePipe} from "../../../pipe/ItemsPerPagePipe";
import {PaginationComponent, PaginationData} from "../../../directive/pagination/PaginationComponent";

@Component({
    selector: "nexus-ussp-main-requests",
    templateUrl: "template/main/tab/requests/template/component.html",
    providers: [RequestsService, CommandService],
    directives: [PaginationComponent],
    pipes: [CommandPipe, ItemsPerPagePipe]
})
export class RequestsComponent {

    messages = ["In this area you can see the list of your requests.", "Click on a request item to view details, cancel it or do other possible actions."];

    commands:Command[] = [];

    emptyEntriesMessage = "No requests";

    paginationData:PaginationData = new PaginationData(10);

    constructor(private service:RequestsService) {
        service.getCommands().subscribe((commands:Command[]) => {
            this.commands = commands;
            this.paginationData.totalRows = this.commands.length;
        });
    }

    onPaginationChange(paginationData:PaginationData) {
        this.paginationData = paginationData;
    }

}
