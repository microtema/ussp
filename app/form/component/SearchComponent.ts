import {Component, OnInit, Input, ViewChild, EventEmitter, SimpleChange, OnChanges} from "@angular/core";
import {NgSwitchDefault, NgSwitchCase, NgSwitch} from "@angular/common";
import {MODAL_DIRECTIVES, ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {Observable} from 'rxjs/Observable';
import {SearchService, SearchResult} from "../../search/service/SearchService";
import {TableDataComponent} from "../../directive/table-data/TableDateComponent";
import {ItemsPerPagePipe} from "../../pipe/ItemsPerPagePipe";

@Component({
    selector: 'search-component',
    templateUrl: 'template/form/component/search.html',
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MODAL_DIRECTIVES, TableDataComponent],
    providers: [SearchService],
    pipes: [ItemsPerPagePipe]
})
export class SearchComponent implements OnInit {

    @Input("component")
    component:any;

    @ViewChild('searchModal')
    modal:ModalComponent;

    searchResult:SearchResult = new SearchResult("", [], []);

    searchConfigName:string = null;

    itemsPerPage:number = 10;

    currentPage:number = 0;

    paginationData:any = [0, 10];

    constructor(private service:SearchService) {
    }

    ngOnInit() {
        this.searchConfigName = this.component["name"];
        this.getSearchResult(this.searchConfigName);
    }

    getSearchResult(searchName:string) {
        this.service.getSearchResult(searchName).then((searchResult:SearchResult) => {
            this.searchResult = searchResult;
        });
    }
}