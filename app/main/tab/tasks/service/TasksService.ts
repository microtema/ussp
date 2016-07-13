import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class TasksService {

    commands:Command[] = [];

    constructor() {
        while (this.commands.length < 10) {
            this.commands[this.commands.length] = new Command("task_" + this.commands.length, "Task_" + this.commands.length, new Date().toISOString());
        }
    }

    emptyEntriesMessage = "No open tasks";

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }
}
