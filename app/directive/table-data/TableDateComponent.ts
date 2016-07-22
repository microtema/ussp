import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'table-data',
    templateUrl: 'template/directive/table-data/component.html'
})
export class TableDataComponent implements OnInit {

    type:string;

    @Input("data")
    data:any;

    constructor() {
    }

    ngOnInit() {
        this.type = this.data.constructor.name;
    }
}