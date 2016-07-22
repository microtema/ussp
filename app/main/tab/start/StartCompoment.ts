import {Component, ViewChild} from "@angular/core";
import {Command} from "../../../service/CommandService";
import {CommandPipe} from "./pipe/CommandPipe";
import {StartService} from "./service/StartService";
import {MODAL_DIRECTIVES, ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {FormComponent} from "../../../form/component/FormComponent";
import {PaginationComponent, PaginationData} from "../../../directive/pagination/PaginationComponent";
import {ItemsPerPagePipe} from "../../../pipe/ItemsPerPagePipe";

@Component({
    selector: "nexus-ussp-main-start",
    templateUrl: "template/main/tab/start/template/component.html",
    providers: [StartService],
    directives: [MODAL_DIRECTIVES, FormComponent, PaginationComponent],
    pipes: [CommandPipe, ItemsPerPagePipe]
})
export class StartComponent {

    messages = ["Welcome Self Service Cardholder to neXus PRIME.", "In this user portal you can view and manage your credentials, like smart cards, smart tokens or certificates."];

    commands:Command[] = [];

    form = {};

    emptyEntriesMessage = "No entries";

    @ViewChild('modal')
    modal:ModalComponent;

    paginationData:PaginationData = new PaginationData(10);

    constructor(private service:StartService) {
        service.getCommands().then((commands:Command[]) => {
            this.commands = commands;
            this.paginationData.totalRows = this.commands.length;
        });
    }

    executeCommand(command:Command) {
        this.service.executeCommand(command).then((form:any) => {
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

    onPaginationChange(paginationData:PaginationData) {
        this.paginationData = paginationData;
    }
}