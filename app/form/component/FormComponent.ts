import {Component, OnInit, Input} from "@angular/core";
import {NgSwitchDefault, NgSwitchCase, NgSwitch} from "@angular/common";

@Component({
    selector: 'form-component',
    templateUrl: 'template/form/component/template.html',
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault]
})
export class FormComponent implements OnInit {

    @Input("component")
    component:any = null;

    constructor() {
    }

    ngOnInit() {
    }

}