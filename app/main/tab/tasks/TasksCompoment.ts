import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {TasksService} from "./service/TasksService";
import {CommandPipe} from "../start/pipe/CommandPipe";

@Component({
    selector: "nexus-ussp-main-tasks",
    templateUrl: "template/main/tab/tasks/template/component.html",
    providers: [TasksService],
    pipes: [CommandPipe]
})
export class TasksComponent {

    messages = ["Here you will receive notifications related to your credentials.",
        "Click on a notification to see details and to do the required action. With clicking on 'Cancel' in the detail view you can also postpone the action. In this case, the notification will be retained in the 'Open Tasks'."];

    commands:Command[] = [];

    constructor(private service:TasksService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

}
