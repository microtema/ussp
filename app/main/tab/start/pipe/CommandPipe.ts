import {Pipe, PipeTransform} from '@angular/core';
import {Command} from "../../../../service/CommandService";

@Pipe({name: 'commandPipe'})
export class CommandPipe implements PipeTransform {

    transform(commands:Command[], searchTerm:string):Command[] {

        if (commands === null || !searchTerm) {
            return commands;
        }

        return commands.filter((command:Command) => {
            return command.displayName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || (command.description && command.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
    }
}
