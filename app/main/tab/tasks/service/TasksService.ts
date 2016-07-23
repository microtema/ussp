import {Injectable} from "@angular/core";
import {Command, CommandService} from "../../../../service/CommandService";
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class TasksService {

    commands:Command[] = [];

    restUrl:string = "rest/process/tasks.json";

    constructor(private commandService:CommandService ) {
    }

    getCommands():Observable<Command[]> {
        return this.commandService.getCommands(this.restUrl);
    }
}
