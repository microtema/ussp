import {Pipe, PipeTransform} from '@angular/core';
import {Command} from "../../../../service/CommandService";

@Pipe({name: 'commandPipe'})
export class CommandPipe implements PipeTransform {

    transform(commands:Command[], searchTerm?):Command[] {

        console.log("commandPipe", searchTerm);

        if (commands === null || !searchTerm) {
            return commands;
        }

        return commands.filter((command:Command) => {
            return command.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || command.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}
