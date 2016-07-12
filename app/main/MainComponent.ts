import {Component} from "@angular/core";
import {MainService, TabData} from "./service/MainService";
import {StartComponent} from "./tab/start/StartCompoment";

@Component({
    selector: "nexus-ussp-main",
    templateUrl: "template/main/component.html",
    providers: [MainService],
    directives: [StartComponent]
})
export class MainComponent {

    tabs:TabData[] = null;

    constructor(private service:MainService) {
        service.getTabs().then((tabs:TabData[]) => {
            this.tabs = tabs;
        });

    }
}
