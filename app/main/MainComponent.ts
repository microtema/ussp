import {Component} from "@angular/core";
import {MainService, TabData} from "./service/MainService";
import {StartComponent} from "./tab/start/StartCompoment";
import {TasksComponent} from "./tab/tasks/TasksCompoment";
import {CredentialsComponent} from "./tab/credentials/CredentialsComponent";
import {RequestsComponent} from "./tab/requests/RequestsComponent";
import {ScimComponent} from "./tab/scim/ScimComponent";

@Component({
    selector: "nexus-ussp-main",
    templateUrl: "template/main/component.html",
    providers: [MainService],
    directives: [StartComponent, TasksComponent, CredentialsComponent, RequestsComponent, ScimComponent]
})
export class MainComponent {

    tabs:TabData[] = null;

    constructor(private service:MainService) {
        service.getTabs().then((tabs:TabData[]) => {
            this.tabs = tabs;
        });

    }
}
