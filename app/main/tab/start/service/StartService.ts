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
                        title: "Search Person",
                        label: "Search Person",
                        type: "button",
                        name: "Person",
                        configNames: ["Person", "Location", "Department"],
                        url: "rest/person/search"
                    },
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
                    {
                        id: 8,
                        label: "E-Mail",
                        type: "radio",
                        name: "contact",
                        value: "email",
                        disabled: false,
                        checked: false
                    },
                    {
                        id: 9,
                        label: "Post",
                        type: "radio",
                        name: "contact",
                        value: "post",
                        checked: true
                    },
                    {
                        id: 10,
                        label: "Address",
                        type: "radio-group",
                        name: "address",
                        value: "home",
                        options: [
                            {
                                label: "Home",
                                value: "home"
                            },
                            {
                                label: "Work",
                                value: "work"
                            }, {
                                label: "Private",
                                value: "private"
                            }
                        ]
                    }
                ]
            });
    }

}
