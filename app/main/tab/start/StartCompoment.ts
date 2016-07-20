import {Component, ViewChild} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "./pipe/CommandPipe";
import {StartService} from "./service/StartService";
import {MODAL_DIRECTIVES, ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {FormComponent} from "../../../form/component/FormComponent";

@Component({
    selector: "nexus-ussp-main-start",
    templateUrl: "template/main/tab/start/template/component.html",
    providers: [StartService],
    directives: [MODAL_DIRECTIVES, FormComponent],
    pipes: [CommandPipe]
})
export class StartComponent {

    messages = ["Welcome Self Service Cardholder to neXus PRIME.", "In this user portal you can view and manage your credentials, like smart cards, smart tokens or certificates."];

    commands:Command[] = [];

    form = {};

    emptyEntriesMessage = "No entries";

    @ViewChild('modal')
    modal:ModalComponent;

    constructor(private service:StartService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
        });
    }

    executeCommand(command:Command) {
        this.service.executeCommand(command).then((form:any) => {
            console.info("executeCommand", form);
            this.form = form;
            this.open();
        });
    }

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
}