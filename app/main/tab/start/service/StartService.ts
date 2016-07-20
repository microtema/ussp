import {Injectable} from "@angular/core";
import {Command} from "../../../../service/CommandService";

@Injectable()
export class StartService {

    commands = [
        new Command("tasks", "Open Tasks", "Look up and work on your open tasks. You have <span class='badge'>51</span> open tasks."),
        new Command("credentials", "Credentials", "View and manage your credentials. You have no credentials."),
        new Command("request", "Request"),
        new Command("scim", "SCIM Identities"),
        new Command("iccns", "Read ICCNs"),
        new Command("substitute", "Substitute for Person", "Substitute for Person", "rest/process/person")
    ];

    getCommands():Promise<Command[]> {
        return Promise.resolve(this.commands);
    }

    executeCommand(command:Command) {
        return Promise.resolve(
            {
                "title": command.displayName,
                "components": [
                    {
                        id: 0,
                        label: "FirstName",
                        type: "text",
                        value: "foo"
                    },
                    {
                        id: 1,
                        label: "LastName",
                        type: "text",
                        value: "bar",
                        disabled: true
                    },
                    {
                        id: 2,
                        label: "Married",
                        type: "checkbox",
                        disabled: true,
                        checked: true
                    },
                    {
                        id: 3,
                        label: "Employee",
                        type: "checkbox",
                        disabled: false,
                        checked: false
                    },
                    {
                        id: 4,
                        label: "Description",
                        type: "textarea",
                        value: "some Description"
                    },
                    {
                        id: 5,
                        label: "Search Person",
                        type: "button",
                        url: "rest/person/search"
                    }
                    ,
                    {
                        id: 6,
                        label: "Title",
                        type: "select",
                        value: "1",
                        options: [
                            {value: "0", label: "Mr"},
                            {value: "1", label: "Ms"}
                        ]
                    },
                    {
                        id: 7,
                        label: "Password",
                        type: "password",
                        value: "secret"
                    },
                ]
            });
    }

}
