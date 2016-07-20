import {Injectable} from "@angular/core";


@Injectable()
export class MainService {

    tabs = [
        new TabData("start", "Start", true),
        new TabData("opentasks", "Open Tasks"),
        new TabData("credentials", "Credentials"),
        new TabData("requests", "Requests"),
        new TabData("scim", "SCIM Identities")
    ];

    getTabs():Promise<TabData[]> {
        return Promise.resolve(this.tabs);
    }
}

export class TabData {
    constructor(public id:string, public displayName:string, public active?:boolean) {
    }
}

