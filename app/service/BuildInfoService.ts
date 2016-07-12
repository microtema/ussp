import {Injectable} from "@angular/core";

@Injectable()
export class BuildInfoService {

    getBuildInfo():BuildInfo {
        return new BuildInfo("3.4.1.140", "neXus PRIME", "Copyright © 2007-2016 Nexus Technology AB");
    }
}

export class BuildInfo {
    constructor(public buildVersion:string, public productName:string, public copyright:string) {
    }
}
