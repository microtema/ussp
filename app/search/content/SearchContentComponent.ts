import {Component} from "@angular/core";

@Component({
    selector: "search-content",
    templateUrl: "template/search/content/component.html"
})
export class SearchContentComponent {

    persons = [
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "selected": true},
        {"firstName": "Mario", "lastName": "Tema", "dob": null},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema"},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()},
        {"firstName": "Mario", "lastName": "Tema", "dob": new Date()}
    ];

    search() {
        alert("foo");
    }
}
