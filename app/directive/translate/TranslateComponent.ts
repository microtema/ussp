import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'translate',
    templateUrl: 'template.html'
})
export class TranslateComponent {

    @Input("key")
    key:string;
}