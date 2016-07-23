import {Injectable} from "@angular/core";
import {Command, CommandService} from "../../../../service/CommandService";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CredentialsService {

    commands:Command[] = [];

    restUrl:string = "rest/process/credentials.json";

    constructor(private commandService:CommandService ) {
    }

    getCommands():Observable<Command[]> {
        return this.commandService.getCommands(this.restUrl);
    }
}
