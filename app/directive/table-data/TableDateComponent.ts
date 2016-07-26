import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'table-data',
    templateUrl: 'template.html'
})
export class TableDataComponent implements OnInit {

    type:string;

    @Input("data")
    data:any;

    ngOnInit() {
        this.type = (this.data != null || this.data != undefined) ? this.data.constructor.name : 'undefined';
    }
}