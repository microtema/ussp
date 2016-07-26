import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

    searchResult:SearchResult = new SearchResult("Person",
        ["FirstName", "LastName", "Date of birth", "Married"],
        [
            ["Mario", "Tema", new Date(), true],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), true],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Emmy", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Aeneas", "Tema", new Date(), false],
            ["Eva", "Tema", new Date(), true]
        ]
    );

    constructor() {
    }

    getSearchResult(searchName:string):Promise<SearchResult> {
        return Promise.resolve(this.searchResult);
    }
}

export class SearchResult {
    constructor(public name:string, public columns:string[], public rows?:Array<any>[]) {

    }
}