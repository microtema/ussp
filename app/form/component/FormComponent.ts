import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from "@angular/core";
import {NgSwitchDefault, NgSwitchCase, NgSwitch} from "@angular/common";
import {MODAL_DIRECTIVES, ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import {SearchComponent} from "./SearchComponent";

@Component({
    selector: 'form-component',
    templateUrl: 'template/form/component/template.html',
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, MODAL_DIRECTIVES, SearchComponent]
})
export class FormComponent implements OnInit {

    @Input("component")
    component:any = null;

    constructor() {
    }

    ngOnInit() {
    }

}