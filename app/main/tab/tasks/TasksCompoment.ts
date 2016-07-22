import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {TasksService} from "./service/TasksService";
import {CommandPipe} from "../start/pipe/CommandPipe";
import {PaginationData, PaginationComponent} from "../../../directive/pagination/PaginationComponent";
import {ItemsPerPagePipe} from "../../../pipe/ItemsPerPagePipe";

@Component({
    selector: "nexus-ussp-main-tasks",
    templateUrl: "template/main/tab/tasks/template/component.html",
    providers: [TasksService],
    directives: [PaginationComponent],
    pipes: [CommandPipe, ItemsPerPagePipe]
})
export class TasksComponent {

    messages = ["Here you will receive notifications related to your credentials.",
        "Click on a notification to see details and to do the required action. With clicking on 'Cancel' in the detail view you can also postpone the action. In this case, the notification will be retained in the 'Open Tasks'."];

    commands:Command[] = [];

    paginationData:PaginationData = new PaginationData(10);

    constructor(private service:TasksService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
            this.paginationData.totalRows = this.commands.length;
        });
    }

    onPaginationChange(paginationData:PaginationData) {
        this.paginationData = paginationData;
    }
}
