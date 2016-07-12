import {Component} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {StartService} from "./service/StartService";
import {CommandPipe} from "./pipe/CommandPipe";

@Component({
    selector: "nexus-ussp-main-start",
    templateUrl: "template/main/tab/start/template/component.html",
    providers: [StartService],
    pipes: [CommandPipe]
})
export class StartComponent {

    messages = ["Welcome Self Service Cardholder to neXus PRIME.", "In this user portal you can view and manage your credentials, like smart cards, smart tokens or certificates."];

    commands:Command[] = null;

    constructor(private service:StartService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

}
